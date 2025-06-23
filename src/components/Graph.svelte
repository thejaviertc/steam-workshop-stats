<script lang="ts">
	import type { IAddon } from "$lib/IAddon";
	import type { ISteamUser } from "$lib/ISteamUser";
	import type { ChartConfiguration } from "chart.js/auto";
	import { _ } from "svelte-i18n";

	import Chart from "chart.js/auto";

	export let steamUser: ISteamUser;
	export let sortType: "latest" | "views" | "subscribers" | "favorites" | "likes" | "dislikes" = "subscribers";

	let graph: HTMLCanvasElement;
	let chartInstance: Chart | null = null;
	let graphsHeight: number = 300;

	/**
	 * Prepares the data for the chart based on sortType.
	 */
	function prepareGraphData(user: ISteamUser, sortBy: typeof sortType) {
		const sortedAddons = [...user.addons].sort((a, b) => {
			if (sortBy === "none") return 0;
			return (b[sortBy] ?? 0) - (a[sortBy] ?? 0);
		});

		graphsHeight = 300 + sortedAddons.length * 150;

		return {
			labels: sortedAddons.map((addon: IAddon) => {
				let title = addon.title;
				return title.length >= 30 ? title.substring(0, 27) + "..." : title;
			}),
			datasets: [
				{
					label: $_("stats.views"),
					data: sortedAddons.map((addon: IAddon) => addon.views),
					borderColor: "rgb(96, 165, 250)",
					backgroundColor: "rgba(96, 165, 250, 0.5)",
					minBarLength: 10,
				},
				{
					label: $_("stats.subscribers"),
					data: sortedAddons.map((addon: IAddon) => addon.subscribers),
					borderColor: "rgb(255, 193, 7)",
					backgroundColor: "rgba(255, 193, 7, 0.5)",
					minBarLength: 10,
				},
				{
					label: $_("stats.favorites"),
					data: sortedAddons.map((addon: IAddon) => addon.favorites),
					borderColor: "rgb(126, 34, 206)",
					backgroundColor: "rgba(126, 34, 206, 0.5)",
					minBarLength: 10,
				},
				{
					label: $_("stats.likes"),
					data: sortedAddons.map((addon: IAddon) => addon.likes),
					borderColor: "rgb(25, 135, 84)",
					backgroundColor: "rgba(25, 135, 84, 0.5)",
					minBarLength: 10,
				},
				{
					label: $_("stats.dislikes"),
					data: sortedAddons.map((addon: IAddon) => addon.dislikes),
					borderColor: "rgb(220, 53, 69)",
					backgroundColor: "rgba(220, 53, 69, 0.5)",
					minBarLength: 10,
				},
			],
		};
	}

	// Re-create chart whenever sortType or steamUser changes
	$: {
		if (chartInstance) {
			chartInstance.destroy();
			chartInstance = null;
		}

		if (graph) {
			const graphConfig: ChartConfiguration = {
				type: "bar",
				data: prepareGraphData(steamUser, sortType),
				options: {
					indexAxis: "y",
					scales: {
						y: { grid: { color: "#666666" } },
						x: { grid: { color: "#666666" } },
					},
					responsive: true,
					maintainAspectRatio: false,
					plugins: {
						legend: { position: "top" },
					},
				},
			};

			chartInstance = new Chart(graph.getContext("2d")!, graphConfig);
		}
	}
</script>

<!-- Chart container -->
<div
	class="container bg-secondary mx-auto mt-8 px-10 py-6 rounded-xl"
	style="height: {graphsHeight}px"
>
	<canvas bind:this={graph} />
</div>
