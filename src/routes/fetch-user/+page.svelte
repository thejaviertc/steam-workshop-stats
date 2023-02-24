<script lang="ts">
	import type IAddon from "$lib/interfaces/IAddon";
	import type ISteamUser from "$lib/interfaces/ISteamUser";

	import Addon from "$lib/Addon.svelte";
	import Badge from "$lib/Badge.svelte";
	import ErrorMessage from "$lib/ErrorMessage.svelte";
	import {
		faCircleInfo,
		faEye,
		faMagnifyingGlass,
		faStar,
		faUserGroup,
	} from "@fortawesome/free-solid-svg-icons";
	import { Chart, registerables } from "chart.js";
	import { Line } from "svelte-chartjs";
	import Fa from "svelte-fa";
	import { _ } from "svelte-i18n";

	// Registers all the elements of the chart automatically
	Chart.register(...registerables);

	let oldUrl: string = "";
	let url: string = "";
	let isSubmitted: boolean = false;
	const apiUrl =
		process.env.NODE_ENV === "development"
			? "http://localhost:3000"
			: "https://javiertcs-api.onrender.com";

	/**
	 * Fetches the API and gets all the info of the Steam URL
	 */
	async function fetchSteamUser() {
		oldUrl = url;

		const response = await fetch(`${apiUrl}/steam-workshop-stats?url=${url}`);

		return await response.json();
	}

	/**
	 * Handles the form
	 */
	function submitSteamUser() {
		if (oldUrl != url) {
			isSubmitted = false;

			// Delay of 100ms for Svelte noticing the variable updated
			setTimeout(() => {
				isSubmitted = true;
			}, 100);
		}
	}

	/**
	 * Moves the view of the user to the id
	 * @param id string
	 */
	function moveView(id: string) {
		setTimeout(() => {
			document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
		}, 100);

		return "";
	}

	/**
	 * Prepares the data for the graph from the ISteamUser
	 * @param steamUser ISteamUser
	 */
	function prepareGraphData(steamUser: ISteamUser) {
		return {
			labels: steamUser.addons.map(function (addon: IAddon) {
				return addon["title"];
			}),
			datasets: [
				{
					label: $_("viewers"),
					data: steamUser.addons.map(function (addon: IAddon) {
						return addon["viewers"];
					}),
					borderColor: "rgb(25, 135, 84)",
					backgroundColor: "rgba(25, 135, 84, 0.5)",
				},
				{
					label: $_("subs"),
					data: steamUser.addons.map(function (addon: IAddon) {
						return addon["subs"];
					}),
					borderColor: "rgb(255, 193, 7)",
					backgroundColor: "rgba(255, 193, 7, 0.5)",
				},
				{
					label: $_("favs"),
					data: steamUser.addons.map(function (addon: IAddon) {
						return addon["favs"];
					}),
					borderColor: "rgb(220, 53, 69)",
					backgroundColor: "rgba(220, 53, 69, 0.5)",
				},
			],
		};
	}
</script>

<svelte:head>
	<title>Steam Workshop Stats</title>
</svelte:head>

<section class="min-h-screen">
	<form on:submit|preventDefault={submitSteamUser} class="flex items-center flex-col pt-10">
		<h2>{$_("enterProfileUrl")}</h2>
		<input
			type="text"
			class="input input-bordered input-accent text-center w-3/4 my-6"
			placeholder="Example: https://steamcommunity.com/id/javiertc/"
			bind:value={url}
			required
		/>
		<button type="submit" class="btn btn-accent text-white normal-case text-lg"
			><Fa class="mr-2 " icon={faMagnifyingGlass} />
			{$_("buttons.getStats")}</button
		>
	</form>
	{#if isSubmitted}
		<div class="pb-10 md:pb-14">
			{#await fetchSteamUser()}
				<div id="loading" class="container mx-auto px-6">
					<div class="bg-yellow-400 px-2 py-6 text-center rounded-xl">
						<Fa icon={faCircleInfo} />
						{$_("notifications.disclaimer")}
					</div>
				</div>
				{moveView("loading")}
			{:then steamUser}
				{#if steamUser.message}
					<ErrorMessage message={steamUser.message} />
				{:else}
					<div id="user">
						<h2 class="text-center">
							{$_("statistics.title", {
								values: { username: steamUser.username },
							})}
						</h2>
						<img
							src={steamUser.profileImage}
							class="h-36 md:h-44 mx-auto my-10 rounded-full"
							alt="Steam Profile"
						/>
						<div
							class="flex flex-col md:flex-row space-y-4 md:space-y-0 px-6 lg:px-0 justify-center"
						>
							<Badge
								faIcon={faEye}
								title={$_("statistics.viewers", {
									values: { viewers: steamUser.viewers },
								})}
								type="bg-green-500"
							/>
							<Badge
								faIcon={faUserGroup}
								title={$_("statistics.subs", {
									values: { subs: steamUser.subs },
								})}
								type="bg-yellow-400"
							/>
							<Badge
								faIcon={faUserGroup}
								title={$_("statistics.lifeSubs", {
									values: { lifeSubs: steamUser.lifeSubs },
								})}
								type="bg-yellow-400"
							/>
							<Badge
								faIcon={faStar}
								title={$_("statistics.favs", {
									values: { favs: steamUser.favs },
								})}
								type="bg-red-600"
							/>
							<Badge
								faIcon={faStar}
								title={$_("statistics.lifeFavs", {
									values: { lifeFavs: steamUser.lifeFavs },
								})}
								type="bg-red-600"
							/>
						</div>
						{#if steamUser.addons.length > 0}
							<div class="container mx-auto my-10 hidden md:block">
								<Line data={prepareGraphData(steamUser)} />
							</div>
						{/if}
						<h2 class="text-center my-10">
							{$_("statistics.addons", {
								values: { username: steamUser.username },
							})}
						</h2>
						{#if steamUser.addons.length > 0}
							<div
								class="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
							>
								{#each steamUser.addons as addon}
									<Addon
										title={addon.title}
										image={addon.image}
										url={addon.url}
										viewers={addon.viewers}
										subs={addon.subs}
										lifeSubs={addon.lifeSubs}
										favs={addon.favs}
										lifeFavs={addon.lifeFavs}
										likes={addon.likes}
										dislikes={addon.dislikes}
									/>
								{/each}
							</div>
						{:else}
							<h3 class="text-center mt-10">
								{$_("statistics.noAddons")}
							</h3>
						{/if}
					</div>
					{moveView("user")}
				{/if}
			{:catch error}
				<ErrorMessage message={error} />
			{/await}
		</div>
	{/if}
</section>
