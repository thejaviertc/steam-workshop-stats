<script lang="ts">
	import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";

	export let faIcon: IconDefinition;
	export let value: number;
</script>

<h5 class="mx-2">
	<Fa icon={faIcon} />
	{value.toLocaleString()}
</h5>
