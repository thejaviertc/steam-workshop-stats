<script lang="ts">
	import Button from "$lib/Button.svelte";
	import { faChartLine, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
	import { _ } from "svelte-i18n";
</script>

<svelte:head>
	<title>Steam Workshop Stats</title>
</svelte:head>

<section class="min-h-screen flex flex-col justify-center items-center text-center">
	<h1>{$_("title")}</h1>
	<h4 class="my-4">See the number of views, subs, favs and more of your addons!</h4>
	<div class="my-6">
		<Button class="btn-disabled" faIcon={faChartLine} link="/"
			>Start tracking my stats (Coming Soon)</Button
		>
		<!-- TODO: Add btn-outline -->
		<Button class="btn-accent" faIcon={faMagnifyingGlass} link="/fetch-user"
			>See someone's stats</Button
		>
	</div>
</section>
