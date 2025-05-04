<script lang="ts">
	import { page } from "$app/stores";
	import SteamApi from "$lib/SteamApi";
	import { faCircleInfo, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
	import { _ } from "svelte-i18n";

	import Notification from "$components/Notification.svelte";
	import UserStats from "$components/UserStats.svelte";

	async function getUser() {
		return await SteamApi.getSteamUser("id", $page.params.slug);
	}
</script>

<section class="min-h-screen mt-28">
	{#await getUser()}
		<Notification class="bg-warning text-black" faIcon={faCircleInfo}>
			{$_("notifications.disclaimer")}
		</Notification>
		<div class="text-center">
			<span class="loading loading-spinner loading-lg text-gray-100"></span>
		</div>
	{:then data}
		{#if data.message}
			<Notification class="bg-error" faIcon={faExclamationCircle}>
				{data.message}
			</Notification>
		{:else}
			<UserStats steamUser={data} />
		{/if}
	{:catch error}
		<h2>{error}</h2>
	{/await}
</section>
