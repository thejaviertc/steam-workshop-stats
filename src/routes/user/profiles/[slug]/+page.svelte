<script lang="ts">
	import { page } from "$app/stores";
	import type { ISteamUser } from "$lib/ISteamUser";
	import SteamApi from "$lib/SteamApi";
	import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
	import { onMount } from "svelte";

	import Notification from "$components/Notification.svelte";
	import UserStats from "$components/UserStats.svelte";

	let user: ISteamUser = {};

	onMount(async () => {
		user = await SteamApi.getSteamUser("profiles", $page.params.slug);
	});
</script>

<section class="min-h-screen mt-28">
	{#if user.message}
		<Notification class="bg-error" faIcon={faExclamationCircle}>
			{user.message}
		</Notification>
	{:else}
		<UserStats steamUser={user} />
	{/if}
</section>
