<script lang="ts">
	import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
	import type { PageData } from "./$types";

	import Notification from "$components/Notification.svelte";
	import UserStats from "$components/UserStats.svelte";

	export let data: PageData;
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
