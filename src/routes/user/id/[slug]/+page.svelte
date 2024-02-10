<script lang="ts">
	import { page } from "$app/stores";
	import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
	import SteamApi from "$lib/SteamApi";

	import Notification from "$components/Notification.svelte";
	import UserStats from "$components/UserStats.svelte";

	import { onMount } from "svelte";
	import type { ISteamUser } from "$lib/ISteamUser";

	let data: ISteamUser = { addons: {} };

	onMount(async () => {
		const id = $page.params.slug;
		data = await SteamApi.getSteamUser("id", id);
	});
</script>

<section class="min-h-screen mt-28">
	{#if data.message}
		<Notification class="bg-error" faIcon={faExclamationCircle}>
			{data.message}
		</Notification>
	{:else}
		<UserStats steamUser={data} />
	{/if}
</section>
