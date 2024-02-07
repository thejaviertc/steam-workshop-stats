<script lang="ts">
	import type { ISteamUser } from "$lib/ISteamUser";
	import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

	import Notification from "$components/Notification.svelte";
	import UserStats from "$components/UserStats.svelte";

	export let steamUser: ISteamUser;
</script>

<section class="min-h-screen mt-28">
	{#if steamUser.message}
		<Notification class="bg-error" faIcon={faExclamationCircle}>
			{steamUser.message}
		</Notification>
	{:else}
		<UserStats {steamUser} />
	{/if}
</section>
