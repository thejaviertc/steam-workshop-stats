<script lang="ts">
	import type ISteamUser from "$lib/interfaces/ISteamUser";

	import Addon from "$lib/Addon.svelte";
	import Notification from "$lib/Notification.svelte";
	import {
		faCircleInfo,
		faExclamationCircle,
		faEye,
		faMagnifyingGlass,
		faStar,
		faThumbsDown,
		faThumbsUp,
		faUser,
	} from "@fortawesome/free-solid-svg-icons";

	import Graphs from "$lib/Graphs.svelte";
	import Fa from "svelte-fa";
	import { _ } from "svelte-i18n";
	import Stat from "$lib/Stat.svelte";

	let oldUrl: string = "";
	let url: string = "";
	let isSubmitted: boolean = false;
	let tab: string = "addon";

	const apiUrl = "https://steam-workshop-stats-api.onrender.com";

	/**
	 * Fetches the API and gets all the info of the Steam URL
	 */
	async function fetchSteamUser(): Promise<ISteamUser> {
		oldUrl = url;

		if (isUrlValid(url)) {
			// let type;

			// if (url.includes("/id/")) {
			// 	type = "id";
			// } else {
			// 	type = "profiles";
			// }

			// const value = url.split(`/${type}/`)[1];
			// const response = await fetch(`${apiUrl}/steam-user/${type}/${value}`);

			const response = await fetch(`${apiUrl}/steam-workshop-stats?url=${url}`);
			const steamUser: ISteamUser = await response.json();

			if (steamUser.errorMessage) {
				throw steamUser.errorMessage;
			}

			return steamUser;
		} else {
			throw "This URL is not valid!";
		}
	}

	/**
	 * Checks if the URL is a Steam Profile URL
	 */
	function isUrlValid(url: string) {
		const urlPattern = /https:\/\/steamcommunity.com\/(id|profiles)\/*/;
		return urlPattern.test(url);
	}

	/**
	 * Handles the form
	 */
	function submitSteamUser() {
		if (oldUrl !== url) {
			isSubmitted = false;

			// Delay of 100ms for Svelte noticing the variable updated
			setTimeout(() => {
				isSubmitted = true;
			}, 100);
		}
	}

	/**
	 * Changes the website language to the selected
	 */
	function changeTab(e: any) {
		e.preventDefault();
		tab = e.target.value;
	}
</script>

<svelte:head>
	<title>Steam Workshop Stats</title>
</svelte:head>

<section class="min-h-screen mt-28">
	<form on:submit|preventDefault={submitSteamUser} class="flex flex-col items-center text-center">
		<h2>{$_("actions.enterProfileUrl")}</h2>
		<input
			type="text"
			class="input input-bordered input-accent text-center w-3/4 my-6"
			placeholder="{$_("misc.example")} https://steamcommunity.com/id/javiertc/"
			bind:value={url}
			required
		/>
		<button type="submit" class="btn btn-accent">
			<Fa class="mr-2 " icon={faMagnifyingGlass} />
			{$_("actions.getStats")}
		</button>
	</form>
	{#if isSubmitted}
		{#await fetchSteamUser()}
			<Notification class="bg-warning" faIcon={faCircleInfo}>
				{$_("notifications.disclaimer")}
			</Notification>
		{:then steamUser}
			<div class="flex flex-col items-center my-8">
				<h2>
					{$_("stats.statsOf", {
						values: { username: steamUser.username },
					})}
				</h2>
				<img
					src={steamUser.profileImage}
					class="h-44 my-8 rounded-full"
					alt="Steam Profile"
				/>
				{#if steamUser.addons.length > 0}
					<div
						class="stats stats-vertical lg:stats-horizontal bg-secondary mx-10 text-center shadow"
					>
						<Stat title={$_("stats.views")} faIcon={faEye} value={steamUser.views} />
						<Stat
							title={$_("stats.subscribers")}
							faIcon={faUser}
							value={steamUser.subscribers}
						/>
						<Stat
							title={$_("stats.favorites")}
							faIcon={faStar}
							value={steamUser.favorites}
						/>
						<Stat
							title={$_("stats.likes")}
							faIcon={faThumbsUp}
							value={steamUser.likes}
						/>
						<Stat
							title={$_("stats.dislikes")}
							faIcon={faThumbsDown}
							value={steamUser.dislikes}
						/>
					</div>
					<div class="invisible lg:visible my-8">
						<button
							on:click={changeTab}
							value="addon"
							class="mx-2 btn btn-accent {tab === "addon" ? "" : "btn-outline"}"
							>{$_("stats.addons")}</button
						>
						<button
							on:click={changeTab}
							value="graphs"
							class="mx-2 btn btn-accent {tab === "graphs" ? "" : "btn-outline"}"
							>{$_("stats.graphs")}</button
						>
					</div>
					{#if tab === "addon"}
						<h2 class="mb-8">
							{$_("stats.addonsOf", {
								values: { username: steamUser.username },
							})}
						</h2>
						<div
							class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mx-8"
						>
							{#each steamUser.addons as addon}
								<Addon
									id={addon.id}
									title={addon.title}
									image={addon.image}
									views={addon.views}
									subscribers={addon.subscribers}
									favorites={addon.favorites}
									likes={addon.likes}
									dislikes={addon.dislikes}
									stars={addon.stars}
								/>
							{/each}
						</div>
					{:else}
						<h2>
							{$_("stats.graphsOf", {
								values: { username: steamUser.username },
							})}
						</h2>
						<Graphs {steamUser} />
					{/if}
				{:else}
					<h2 class="text-center">
						{$_("stats.noAddons")}
					</h2>
				{/if}
			</div>
		{:catch error}
			<Notification class="bg-error" faIcon={faExclamationCircle}>{error}</Notification>
		{/await}
	{/if}
</section>
