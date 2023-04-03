<script>
	import { page } from "$app/stores";
	import Button from "$lib/Button.svelte";
	import { faBackward } from "@fortawesome/free-solid-svg-icons";
</script>

<svelte:head>
	<title>{$page.status}</title>
</svelte:head>

<section class="min-h-screen flex flex-col justify-center items-center text-center">
	<h2 class="mb-6">Something Happened - {$page.status}</h2>
	<Button class="btn-accent" faIcon={faBackward} link="/">Return Home</Button>
</section>
