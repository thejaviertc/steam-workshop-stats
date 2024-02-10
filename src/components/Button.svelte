<script lang="ts">
	import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";

	export let faIcon: IconDefinition | undefined = undefined;
	export let link: string;
</script>

<a class="btn {$$props.class} mx-2" href={link} role="button">
	{#if faIcon}
		<Fa icon={faIcon} />
	{/if}
	<slot />
</a>
