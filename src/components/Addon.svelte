<script lang="ts">
	import {
		faEye,
		faMagnifyingGlass,
		faStar,
		faThumbsDown,
		faThumbsUp,
		faUser,
	} from "@fortawesome/free-solid-svg-icons";
	import { _ } from "svelte-i18n";

	import Badge from "./Badge.svelte";
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
	<figure><img src={image} alt="Addon Logo" /></figure>
	<div class="card-body">
		<div class="rating justify-center mb-4">
			{#each { length: 5 } as _, i}
				{#if i < stars}
					<input class="mask mask-star bg-lime-400 mx-1" />
				{:else}
					<input class="mask mask-star bg-primary-content mx-1" />
				{/if}
			{/each}
		</div>
		<h2 class="card-title">{title}</h2>
		<div class="my-2">
			<div class="flex justify-center">
				<Badge faIcon={faEye} value={views} />
				<Badge faIcon={faUser} value={subscribers} />
				<Badge faIcon={faStar} value={favorites} />
			</div>
			<div class="flex justify-center mt-2">
				<Badge faIcon={faThumbsUp} value={likes} />
				<Badge faIcon={faThumbsDown} value={dislikes} />
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
