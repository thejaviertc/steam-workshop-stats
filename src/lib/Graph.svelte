<script lang="ts">
	import type IAddon from "$lib/interfaces/IAddon";
	import type ISteamUser from "$lib/interfaces/ISteamUser";

	import { Chart, registerables } from "chart.js";
	import { Line } from "svelte-chartjs";
	import { _ } from "svelte-i18n";

	// Registers all the elements of the chart automatically
	Chart.register(...registerables);

	export let steamUser: ISteamUser;

	/**
	 * Prepares the data for the graph from the ISteamUser
	 * @param steamUser ISteamUser
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
				},
				{
					label: $_("stats.subscribers"),
					data: steamUser.addons.map(function (addon: IAddon) {
						return addon["subscribers"];
					}),
					borderColor: "rgb(255, 193, 7)",
					backgroundColor: "rgba(255, 193, 7, 0.5)",
				},
				{
					label: $_("stats.favorites"),
					data: steamUser.addons.map(function (addon: IAddon) {
						return addon["favorites"];
					}),
					borderColor: "rgb(220, 53, 69)",
					backgroundColor: "rgba(220, 53, 69, 0.5)",
				},
			],
		};
	}

	/**
	 * Prepares the data for the graph from the ISteamUser
	 * @param steamUser ISteamUser
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
				},
				{
					label: $_("stats.dislikes"),
					data: steamUser.addons.map(function (addon: IAddon) {
						return addon["dislikes"];
					}),
					borderColor: "rgb(220, 53, 69)",
					backgroundColor: "rgba(220, 53, 69, 0.5)",
				},
			],
		};
	}
</script>

<div class="container bg-secondary mx-auto mt-8 px-10 py-6 rounded-xl">
	<Line data={prepareBasicData(steamUser)} />
</div>

<div class="container bg-secondary mx-auto mt-8 px-10 py-6 rounded-xl">
	<Line data={prepareScoreData(steamUser)} />
</div>
