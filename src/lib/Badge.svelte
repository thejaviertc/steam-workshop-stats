<script lang="ts">
	import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

	import Fa from "svelte-fa";

	export let faIcon: IconDefinition;
	export let title: string;
	export let type: string;
</script>

<span class="badge bg-{type} mx-1 my-1 text-white">
	<Fa icon={faIcon} />
	{title}
</span>

<style lang="scss">
	.badge {
		font-size: 20px;
	}
</style>
