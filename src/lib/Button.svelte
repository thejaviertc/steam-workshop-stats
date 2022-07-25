<script lang="ts">
	import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

	import Fa from "svelte-fa";

	export let faIcon: IconDefinition;
	export let link: string;
	export let text: string;
</script>

<a class="btn btn-secondary mx-2" href={link} role="button">
	<Fa icon={faIcon} />
	{text}
</a>
