<script lang="ts">
	import type IAddon from "$lib/IAddon";
	import type ISteamUser from "$lib/ISteamUser";
	import type { ChartConfiguration } from "chart.js/auto";

	import Chart from "chart.js/auto";
	import { onMount } from "svelte";
	import { _ } from "svelte-i18n";

	export let steamUser: ISteamUser;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let graph: any;
	let graphsHeight: number = 300;
	let graphConfig: ChartConfiguration = {
		type: "bar",
		data: prepareGraphData(steamUser),
		options: {
			indexAxis: "y",
			scales: {
				y: {
					grid: {
						color: "#666666",
					},
				},
				x: {
					grid: {
						color: "#666666",
					},
				},
			},
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: {
					position: "top",
				},
			},
		},
	};

	onMount(() => {
		new Chart(graph.getContext("2d"), graphConfig);
	});

	/**
	 * Prepares the data for the graph
	 */
	function prepareGraphData(steamUser: ISteamUser) {
		graphsHeight = graphsHeight + steamUser.addons.length * 150;

		return {
			labels: steamUser.addons.map(function (addon: IAddon) {
				let title = addon["title"];

				if (title.length >= 30) {
					title = title.substring(0, 27) + "...";
				}

				return title;
			}),
			datasets: [
				{
					label: $_("stats.views"),
					data: steamUser.addons.map(function (addon: IAddon) {
						return addon["views"];
					}),
					borderColor: "rgb(96, 165, 250)",
					backgroundColor: "rgba(96, 165, 250, 0.5)",
					minBarLength: 10,
				},
				{
					label: $_("stats.subscribers"),
					data: steamUser.addons.map(function (addon: IAddon) {
						return addon["subscribers"];
					}),
					borderColor: "rgb(255, 193, 7)",
					backgroundColor: "rgba(255, 193, 7, 0.5)",
					minBarLength: 10,
				},
				{
					label: $_("stats.favorites"),
					data: steamUser.addons.map(function (addon: IAddon) {
						return addon["favorites"];
					}),
					borderColor: "rgb(126, 34, 206)",
					backgroundColor: "rgba(126, 34, 206, 0.5)",
					minBarLength: 10,
				},
				{
					label: $_("stats.likes"),
					data: steamUser.addons.map(function (addon: IAddon) {
						return addon["likes"];
					}),
					borderColor: "rgb(25, 135, 84)",
					backgroundColor: "rgba(25, 135, 84, 0.5)",
					minBarLength: 10,
				},
				{
					label: $_("stats.dislikes"),
					data: steamUser.addons.map(function (addon: IAddon) {
						return addon["dislikes"];
					}),
					borderColor: "rgb(220, 53, 69)",
					backgroundColor: "rgba(220, 53, 69, 0.5)",
					minBarLength: 10,
				},
			],
		};
	}
</script>

<div
	class="container bg-secondary mx-auto mt-8 px-10 py-6 rounded-xl"
	style="height: {graphsHeight}px"
>
	<canvas bind:this={graph} />
</div>
