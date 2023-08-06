<script lang="ts">
	import { base } from "$app/paths";
	import Notification from "$components/Notification.svelte";
	import {
		faCircleInfo,
		faExclamationCircle,
		faMagnifyingGlass,
	} from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
	import { _ } from "svelte-i18n";

	let url: string = "";
	let showErrorMessage = false;

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
		showErrorMessage = false;

		if (isUrlValid(url)) {
			let type;

			if (url.includes("/id/")) {
				type = "id";
			} else {
				type = "profiles";
			}

			const value = url.split(`/${type}/`)[1].split("/")[0];

			window.location.href = `${base}/user/${type}/${value}`;
		} else {
			showErrorMessage = true;
		}
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
			placeholder="{$_('misc.example')} https://steamcommunity.com/id/javiertc/"
			bind:value={url}
			required
		/>
		<button type="submit" class="btn btn-accent">
			<Fa class="mr-2 " icon={faMagnifyingGlass} />
			{$_("actions.getStats")}
		</button>
	</form>
	<Notification class="bg-warning" faIcon={faCircleInfo}>
		{$_("notifications.disclaimer")}
	</Notification>
	{#if showErrorMessage}
		<Notification class="bg-error" faIcon={faExclamationCircle}>
			{$_("stats.invalidUrl")}
		</Notification>
	{/if}
</section>
