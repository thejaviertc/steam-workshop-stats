<script lang="ts">
	import { base } from "$app/paths";
	import Button from "$components/Button.svelte";
	import { faChartLine, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
	import { _ } from "svelte-i18n";
</script>

<svelte:head>
	<title>Steam Workshop Stats</title>
</svelte:head>

<section class="min-h-screen flex flex-col justify-center items-center text-center">
	<h1 class="px-6">{$_("title")}</h1>
	<h4 class="my-4 px-6">{$_("description")}</h4>
	<div class="my-6">
		<Button class="btn btn-neutral mb-4 sm:mb-0" faIcon={faChartLine} link={base}>
			{$_("actions.trackMyStats")}
		</Button>
		<!-- TODO: Add btn-outline -->
		<Button class="btn-accent" faIcon={faMagnifyingGlass} link="{base}/fetch-user">
			{$_("actions.fetchUser")}
		</Button>
	</div>
</section>
