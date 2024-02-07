<script lang="ts">
	import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";

	export let title: string;
	export let faIcon: IconDefinition;
	export let value: number;
</script>

<div class="stat">
	<div class="stat-title">{title}</div>
	<div class="stat-value">
		<Fa icon={faIcon} />
		{value.toLocaleString()}
	</div>
</div>
