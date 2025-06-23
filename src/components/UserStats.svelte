<script lang="ts">
  import {
    faCircleInfo,
    faEye,
    faStar,
    faThumbsDown,
    faThumbsUp,
    faUser,
  } from "@fortawesome/free-solid-svg-icons";
  import { _ } from "svelte-i18n";

  import Addon from "$components/Addon.svelte";
  import Graph from "$components/Graph.svelte";
  import StatTitle from "$components/StatTitle.svelte";
  import type { ISteamUser } from "$lib/ISteamUser";
  import Notification from "./Notification.svelte";

  import { onMount } from "svelte";

  export let steamUser: ISteamUser;
  let tab: string = "addons";

  // 🧩 Sorting state & enum
  let sortType: "views" | "subscribers" | "favorites" = "subscribers";
  const enum_type = { views: 1, subscribers: 2, favorites: 3 };
  let gridEl: HTMLElement;

  function reorderCards() {
    const selector = `.card .my-2 .flex.justify-center h5:nth-child(${enum_type[sortType]})`;
    const cards = Array.from(gridEl.children);
    const cardsWithText = cards
      .map(card => {
        const el = card.querySelector(selector);
        const txt = el?.textContent.trim().replace(/,/g, "") || "0";
        return { card, value: parseFloat(txt) };
      })
      .sort((a, b) => b.value - a.value);
    gridEl.innerHTML = "";
    cardsWithText.forEach(o => gridEl.appendChild(o.card));
  }

  function changeTab(e: Event) {
    e.preventDefault();
    tab = (e.target as HTMLButtonElement).value;
    if (tab === "addons") reorderCards();
  }

  onMount(() => {
    if (tab === "addons") reorderCards();
  });
</script>

<div class="flex flex-col items-center mb-8">
	<h2>
		{$_("stats.statsOf", {
			values: { username: steamUser.username },
		})}
	</h2>
	<img src={steamUser.profileImageUrl} class="h-44 my-8 rounded-full" alt="Steam Profile" />
  {#if steamUser.addons.length > 0}
    <!-- Stats summary -->
    <div class="stats stats-vertical lg:stats-horizontal bg-secondary mx-10 text-center shadow-sm">
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
    </div>

    <!-- Tab controls -->
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
      <!-- Sort control -->
      <div class="controls mb-4">
        <label class="mr-2">Sort by:</label>
        <select bind:value={sortType} on:change={reorderCards} class="btn btn-sm">
          <option value="views">{$_("stats.views")}</option>
          <option value="subscribers">{$_("stats.subscribers")}</option>
          <option value="favorites">{$_("stats.favorites")}</option>
        </select>
      </div>

      <h2 class="mb-8">{$_("stats.addonsOf", { values: { username: steamUser.username } })}</h2>

      <!-- Add-ons grid -->
      <div bind:this={gridEl} class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mx-8">
        {#each steamUser.addons as addon}
          <Addon
            id={addon.id}
            title={addon.title}
            image={addon.imageUrl}
            views={addon.views}
            subscribers={addon.subscribers}
            favorites={addon.favorites}
            likes={addon.likes}
            dislikes={addon.dislikes}
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
