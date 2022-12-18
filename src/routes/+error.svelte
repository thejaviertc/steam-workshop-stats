<script>
	import { page } from "$app/stores";
	import Button from "$lib/Button.svelte";
	import { faBackward } from "@fortawesome/free-solid-svg-icons";
</script>

<svelte:head>
	<title>{$page.status}</title>
</svelte:head>

<div
	class="bg-slate-800 min-h-screen flex justify-center items-center"
>
	<div>
		<h2>Something Happened - {$page.status}</h2>
		<div class="flex justify-center my-6">
			<Button faIcon={faBackward} link="/" text="Return Back" />
		</div>
	</div>
</div>
