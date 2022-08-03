<script lang="ts">
	import {
		faMagnifyingGlass,
		faStar,
		faThumbsDown,
		faThumbsUp,
		faUserGroup,
	} from "@fortawesome/free-solid-svg-icons";
	import { _ } from "svelte-i18n";
	import Badge from "./Badge.svelte";
	import Button from "./Button.svelte";

	export let title: string;
	export let image: string;
	export let url: string;
	export let viewers: number;
	export let subs: number;
	export let lifeSubs: number;
	export let favs: number;
	export let lifeFavs: number;
	export let likes: number;
	export let dislikes: number;
</script>

<div class="bg-slate-800 border-4 border-slate-700 p-6 rounded-xl">
	<img class="w-60 mx-auto rounded-xl" src={image} alt="" />
	<h4 class="text-center my-6">
		{title}
	</h4>
	<div class="flex flex-col justify-center space-y-4">
		<Badge
			faIcon={faStar}
			title={$_("statistics.viewers", {
				values: { viewers: viewers },
			})}
			type="bg-green-500"
		/>
		<Badge
			faIcon={faUserGroup}
			title={$_("statistics.subs", {
				values: { subs: subs },
			})}
			type="bg-yellow-400"
		/>
		<Badge
			faIcon={faUserGroup}
			title={$_("statistics.lifeSubs", {
				values: { lifeSubs: lifeSubs },
			})}
			type="bg-yellow-400"
		/>
		<Badge
			faIcon={faStar}
			title={$_("statistics.favs", {
				values: { favs: favs },
			})}
			type="bg-red-600"
		/>
		<Badge
			faIcon={faStar}
			title={$_("statistics.lifeFavs", {
				values: { lifeFavs: lifeFavs },
			})}
			type="bg-red-600"
		/>
	</div>
	<div class="my-6 flex justify-center">
		<Badge
			faIcon={faThumbsUp}
			title={$_("statistics.likes", {
				values: { likes: likes },
			})}
			type="bg-green-500"
		/>
		<Badge
			faIcon={faThumbsDown}
			title={$_("statistics.dislikes", {
				values: { dislikes: dislikes },
			})}
			type="bg-red-600"
		/>
	</div>
	<div class="flex justify-center">
		<Button
			faIcon={faMagnifyingGlass}
			text={$_("statistics.seeOnSteam")}
			link={url}
		/>
	</div>
</div>
