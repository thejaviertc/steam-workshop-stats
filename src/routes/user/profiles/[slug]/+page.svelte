<script lang="ts">
	import Notification from "$components/Notification.svelte";
	import UserStats from "$components/UserStats.svelte";
	import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

	export let data;
</script>

{#if data.steamUser.errorMessage}
	<Notification class="bg-error" faIcon={faExclamationCircle}>
		{data.steamUser.errorMessage}
	</Notification>
{:else}
	<UserStats steamUser={data.steamUser} />
{/if}
