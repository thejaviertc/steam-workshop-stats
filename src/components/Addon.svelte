<script lang="ts">
	import {
		faEye,
		faMagnifyingGlass,
		faStar,
		faThumbsDown,
		faThumbsUp,
		faUser,
		faTrophy,
	} from "@fortawesome/free-solid-svg-icons";
	import { _ } from "svelte-i18n";

	import StatBadge from "./StatBadge.svelte";
	import Button from "./Button.svelte";

	export let id: number;
	export let title: string;
	export let image: string;
	export let views: number;
	export let subscribers: number;
	export let favorites: number;
	export let likes: number;
	export let dislikes: number;
	export let stars: number;
</script>

<div class="card bg-secondary shadow-xl text-center">
	<figure><img src={image} class="w-full" alt="Addon Logo" /></figure>
	<div class="card-body">
		<div class="rating justify-center mb-4">
			{#each { length: 5 } as _, i}
				{#if i < stars}
					<div class="mask mask-star bg-lime-400 mx-1"></div>
				{:else}
					<div class="mask mask-star bg-primary-content mx-1" aria-current="true"></div>
				{/if}
			{/each}
		</div>
		<p class="card-title text-xl">{title}</p>
		<div class="my-2">
			<div class="flex justify-center">
				<StatBadge faIcon={faEye} value={views} />
				<StatBadge faIcon={faUser} value={subscribers} />
				<StatBadge faIcon={faStar} value={favorites} />
			</div>
			<div class="flex justify-center mt-2">
				<StatBadge faIcon={faThumbsUp} value={likes} />
				<StatBadge faIcon={faThumbsDown} value={dislikes} />
				<StatBadge faIcon={faTrophy} value={awards} />
			</div>
		</div>
		<div class="card-actions justify-center">
			<Button
				class="btn-accent"
				faIcon={faMagnifyingGlass}
				link="https://steamcommunity.com/sharedfiles/filedetails/?id={id}"
			>
				{$_("actions.seeInSteam")}
			</Button>
		</div>
	</div>
</div>
