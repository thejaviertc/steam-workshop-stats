<script lang="ts">
	import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

	import Fa from "svelte-fa";

	export let faIcon: IconDefinition;
	export let link: string;
	export let text: string;
</script>

<a
	class="bg-sky-400 hover:bg-sky-600 text-white px-4 py-2 mx-2 rounded-xl"
	href={link}
	role="button"
>
	<Fa icon={faIcon} />
	{text}
</a>
