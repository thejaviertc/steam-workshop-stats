<script lang="ts">
	import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";

	export let faIcon: IconDefinition;
</script>

<div class={`mx-auto my-8 max-w-4xl p-6 w-3/4 text-center rounded-xl ${$$props.class}`}>
	<Fa icon={faIcon} />
	<slot />
</div>
