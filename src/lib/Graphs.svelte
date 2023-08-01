<script lang="ts">
	import type IAddon from "$lib/interfaces/IAddon";
	import type ISteamUser from "$lib/interfaces/ISteamUser";

	import { _ } from "svelte-i18n";
	import Chart from "chart.js/auto";
	import { onMount } from "svelte";

	export let steamUser: ISteamUser;

	let basicDataGraph: any;
	let scoreGraph: any;

	let graphConfig = {
		type: "bar",
		data: {},
		options: {
			indexAxis: "y",
			responsive: true,
			plugins: {
				legend: {
					position: "top",
				},
			},
		},
	};

	onMount(() => {
		let basicDataGraphConfig = { ...graphConfig };
		basicDataGraphConfig.data = prepareBasicData(steamUser);

		new Chart(basicDataGraph.getContext("2d"), basicDataGraphConfig);

		let scoreGraphConfig = { ...graphConfig };
		scoreGraphConfig.data = prepareScoreData(steamUser);

		new Chart(scoreGraph.getContext("2d"), scoreGraphConfig);
	});

	/**
	 * Prepares the data for the graph of Basic Data
	 */
	function prepareBasicData(steamUser: ISteamUser) {
		return {
			labels: steamUser.addons.map(function (addon: IAddon) {
				return addon["title"];
			}),
			datasets: [
				{
					label: $_("stats.views"),
					data: steamUser.addons.map(function (addon: IAddon) {
						return addon["views"];
					}),
					borderColor: "rgb(25, 135, 84)",
					backgroundColor: "rgba(25, 135, 84, 0.5)",
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
					borderColor: "rgb(220, 53, 69)",
					backgroundColor: "rgba(220, 53, 69, 0.5)",
					minBarLength: 10,
				},
			],
		};
	}

	/**
	 * Prepares the data for the graph of Score
	 */
	function prepareScoreData(steamUser: ISteamUser) {
		return {
			labels: steamUser.addons.map(function (addon: IAddon) {
				return addon["title"];
			}),
			datasets: [
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

<div class="container bg-secondary mx-auto mt-8 px-10 py-6 rounded-xl">
	<canvas bind:this={basicDataGraph} />
</div>

<div class="container bg-secondary mx-auto mt-8 px-10 py-6 rounded-xl">
	<canvas bind:this={scoreGraph} />
</div>
