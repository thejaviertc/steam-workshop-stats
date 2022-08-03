<script lang="ts">
	import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

	import Fa from "svelte-fa";

	export let faIcon: IconDefinition;
	export let title: string;
	export let type: string;
</script>

<span class="{type} text-white px-3 py-1 mx-2 text-center rounded-xl">
	<Fa icon={faIcon} />
	{title}
</span>
