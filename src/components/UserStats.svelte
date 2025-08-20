<script lang="ts">
	import {
		faCircleInfo,
		faEye,
		faSortDown,
		faSortUp,
		faStar,
		faThumbsDown,
		faThumbsUp,
		faTrophy,
		faUser,
	} from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
	import { _ } from "svelte-i18n";

	import Addon from "$components/Addon.svelte";
	import Graph from "$components/Graph.svelte";
	import StatTitle from "$components/StatTitle.svelte";
	import type { ISteamUser } from "$lib/ISteamUser";
	import SortingType from "$lib/SortingType";
	import Notification from "./Notification.svelte";

	export let steamUser: ISteamUser;
	let tab: string = "addons";

	// Sorting state
	let sortType: SortingType = SortingType.PublishDate;
	let sortDescendingOrder: boolean = true;

	// Computed visible addons based on sort type
	$: visibleAddons = [...steamUser.addons].sort((a, b) => {
		switch (sortType as SortingType) {
			case SortingType.Views:
				return sortDescendingOrder ? b.views - a.views : a.views - b.views;

			case SortingType.Suscribers:
				return sortDescendingOrder
					? b.subscribers - a.subscribers
					: a.subscribers - b.subscribers;

			case SortingType.Favorites:
				return sortDescendingOrder ? b.favorites - a.favorites : a.favorites - b.favorites;

			case SortingType.Likes:
				return sortDescendingOrder ? b.likes - a.likes : a.likes - b.likes;

			case SortingType.Dislikes:
				return sortDescendingOrder ? b.dislikes - a.dislikes : a.dislikes - b.dislikes;

			case SortingType.PublishDate:
			default:
				return sortDescendingOrder ? -1 : 1;
		}
	});

	/**
	 * Changes the view into the selected tab
	 */
	function changeTab(e: Event) {
		e.preventDefault();
		tab = (e.target as HTMLButtonElement).value;
	}
</script>

<div class="flex flex-col items-center mb-8">
	<h2>
		{$_("stats.statsOf", {
			values: { username: steamUser.username },
		})}
	</h2>
	<img src={steamUser.profileImageUrl} class="h-44 my-8 rounded-full" alt="Steam Profile" />
	{#if steamUser.addons.length > 0}
		<div
			class="stats stats-vertical lg:stats-horizontal bg-secondary mx-10 text-center shadow-sm"
		>
			<StatTitle title={$_("stats.views")} faIcon={faEye} value={steamUser.views} />
			<StatTitle
				title={$_("stats.subscribers")}
				faIcon={faUser}
				value={steamUser.subscribers}
			/>
			<StatTitle title={$_("stats.favorites")} faIcon={faStar} value={steamUser.favorites} />
			<StatTitle title={$_("stats.likes")} faIcon={faThumbsUp} value={steamUser.likes} />
			<StatTitle
				title={$_("stats.dislikes")}
				faIcon={faThumbsDown}
				value={steamUser.dislikes}
			/>
			<StatTitle title={$_("stats.awards")} faIcon={faTrophy} value={steamUser.awards} />
		</div>
		<div class="invisible lg:visible my-8">
			<button
				on:click={changeTab}
				value="addons"
				class="mx-2 btn btn-accent {tab === 'addons' ? '' : 'btn-outline'}"
			>
				{$_("stats.addons")}
			</button>
			<button
				on:click={changeTab}
				value="graph"
				class="mx-2 btn btn-accent {tab === 'graph' ? '' : 'btn-outline'}"
			>
				{$_("stats.graph")}
			</button>
		</div>
		{#if tab === "addons"}
			<div class="flex">
				<fieldset class="fieldset mx-2 mb-8">
					<legend class="fieldset-legend text-lg">Sort by:</legend>
					<select bind:value={sortType} class="select bg-primary border-accent">
						<option value={SortingType.PublishDate} selected>Publish Date</option>
						<option value={SortingType.Views}>{$_("stats.views")}</option>
						<option value={SortingType.Suscribers}>{$_("stats.subscribers")}</option>
						<option value={SortingType.Favorites}>{$_("stats.favorites")}</option>
						<option value={SortingType.Likes}>{$_("stats.likes")}</option>
						<option value={SortingType.Dislikes}>{$_("stats.dislikes")}</option>
					</select>
				</fieldset>

				<fieldset class="fieldset mx-2 mb-8">
					<legend class="fieldset-legend text-lg">Sort order:</legend>
					<label class="swap text-2xl">
						<input type="checkbox" bind:checked={sortDescendingOrder} />

						<Fa icon={faSortDown} class="swap-on fill-current" />
						<Fa icon={faSortUp} class="swap-off fill-current" />
					</label>
				</fieldset>
			</div>

			<h2 class="mb-8">
				{$_("stats.addonsOf", {
					values: { username: steamUser.username },
				})}
			</h2>
			<div
				class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mx-8"
			>
				{#each visibleAddons as addon}
					<Addon
						id={addon.id}
						title={addon.title}
						image={addon.imageUrl}
						views={addon.views}
						subscribers={addon.subscribers}
						favorites={addon.favorites}
						likes={addon.likes}
						dislikes={addon.dislikes}
						awards={addon.awards}
						stars={addon.stars}
					/>
				{/each}
			</div>
		{:else if tab === "graph"}
			<h2>
				{$_("stats.graphOf", {
					values: { username: steamUser.username },
				})}
			</h2>
			<Graph {steamUser} />
		{/if}
	{:else}
		<Notification class="bg-warning text-black" faIcon={faCircleInfo}>
			{$_("stats.noAddons")}
		</Notification>
	{/if}
</div>
