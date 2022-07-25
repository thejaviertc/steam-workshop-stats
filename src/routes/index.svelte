<script lang="ts">
	import Addon from "$lib/Addon.svelte";
	import Badge from "$lib/Badge.svelte";
	import Button from "$lib/Button.svelte";
	import ErrorMessage from "$lib/ErrorMessage.svelte";
	import { faGithub } from "@fortawesome/free-brands-svg-icons";
	import {
		faAngleDown,
		faCircleInfo,
		faEye,
		faMagnifyingGlass,
		faStar,
		faUserGroup,
	} from "@fortawesome/free-solid-svg-icons";
	import { Chart, registerables } from "chart.js";
	import { Line } from "svelte-chartjs";
	import Fa from "svelte-fa";
	import { _ } from "svelte-i18n";
	import type IAddon from "../interfaces/IAddon";
	import type ISteamUser from "../interfaces/ISteamUser";

	Chart.register(...registerables);

	let oldUrl: string = "";
	let url: string = "";
	let isSubmitted: boolean = false;

	async function fetchSteamUser() {
		oldUrl = url;

		// https://javiertcs-api.herokuapp.com
		const response = await fetch(
			`http://localhost:3001/steam-workshop-stats?url=${url}`
		);
		return await response.json();
	}

	function submitSteamUser() {
		if (oldUrl != url) {
			isSubmitted = false;
			setTimeout(() => {
				isSubmitted = true;
			}, 100);
		}
	}

	function moveView(id: string) {
		setTimeout(() => {
			document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}

	function prepareGraphData(steamUser: ISteamUser) {
		return {
			labels: steamUser.addons.map(function (addon: IAddon) {
				return addon["title"];
			}),
			datasets: [
				{
					label: $_("viewers"),
					data: steamUser.addons.map(function (addon: IAddon) {
						return addon["viewers"];
					}),
					borderColor: "rgb(25, 135, 84)",
					backgroundColor: "rgba(25, 135, 84, 0.5)",
				},
				{
					label: $_("subs"),
					data: steamUser.addons.map(function (addon: IAddon) {
						return addon["subs"];
					}),
					borderColor: "rgb(255, 193, 7)",
					backgroundColor: "rgba(255, 193, 7, 0.5)",
				},
				{
					label: $_("favs"),
					data: steamUser.addons.map(function (addon: IAddon) {
						return addon["favs"];
					}),
					borderColor: "rgb(220, 53, 69)",
					backgroundColor: "rgba(220, 53, 69, 0.5)",
				},
			],
		};
	}
</script>

<svelte:head>
	<title>Steam Workshop Stats</title>
</svelte:head>

<section id="home" class="fullpage bg-primary">
	<div class="container text-center">
		<h1>{$_("title")}</h1>
		<h2>{$_("description")}</h2>
		<div class="d-flex justify-content-center py-4">
			<Button
				faIcon={faGithub}
				text="Github"
				link="https://github.com/thejaviertc/steam-workshop-stats"
			/>
			<Button faIcon={faAngleDown} text={$_("buttons.go")} link="#form" />
		</div>
	</div>
</section>
<section id="form" class="bg-secondary py-5">
	<div class="container text-center">
		<h3>{$_("enterProfileUrl")}</h3>
		<form on:submit|preventDefault={submitSteamUser}>
			<div class="form-group d-flex justify-content-center">
				<input
					type="text"
					class="form-control text-center my-4"
					style="width: 70%"
					placeholder="https://steamcommunity.com/id/javiertc/"
					bind:value={url}
				/>
			</div>
			<div class="d-flex justify-content-center">
				<button type="submit" class="btn btn-secondary">
					<Fa icon={faMagnifyingGlass} />
					{$_("buttons.getStats")}
				</button>
			</div>
		</form>
	</div>
</section>
{#if isSubmitted}
	<section id="user" class="bg-secondary pb-5">
		<div class="container">
			{#await fetchSteamUser()}
				<div id="loading">
					<div class="d-flex justify-content-center py-2">
						<div class="spinner-border" role="status">
							<span class="sr-only" />
						</div>
					</div>
					<div
						class="alert alert-warning mt-4 text-center"
						role="alert"
					>
						<Fa icon={faCircleInfo} />
						{$_("notifications.disclaimer")}
					</div>
				</div>
				{moveView("loading")}
			{:then steamUser}
				{#if steamUser.message}
					<ErrorMessage message={steamUser.message} />
				{:else}
					<div id="user">
						<h2 class="text-center">
							{$_("statistics.title", {
								values: { username: steamUser.username },
							})}
						</h2>
						<img
							src={steamUser.profileImage}
							class="img-fluid mx-auto d-block py-3"
							alt="Steam Profile"
						/>
						<p class="text-center">
							<Badge
								faIcon={faEye}
								title={$_("statistics.viewers", {
									values: { viewers: steamUser.viewers },
								})}
								type="success"
							/>
							<Badge
								faIcon={faUserGroup}
								title={$_("statistics.subs", {
									values: { subs: steamUser.subs },
								})}
								type="warning"
							/>
							<Badge
								faIcon={faUserGroup}
								title={$_("statistics.lifeSubs", {
									values: { lifeSubs: steamUser.lifeSubs },
								})}
								type="warning"
							/>
							<Badge
								faIcon={faStar}
								title={$_("statistics.favs", {
									values: { favs: steamUser.favs },
								})}
								type="danger"
							/>
							<Badge
								faIcon={faStar}
								title={$_("statistics.lifeFavs", {
									values: { lifeFavs: steamUser.lifeFavs },
								})}
								type="danger"
							/>
						</p>
						{#if steamUser.addons.length > 0}
							<div class="container py-2 d-none d-md-block">
								<Line data={prepareGraphData(steamUser)} />
							</div>
						{/if}
						<h2 class="text-center pt-4">
							{$_("statistics.addons", {
								values: { username: steamUser.username },
							})}
						</h2>
						{#if steamUser.addons.length > 0}
							<div class="row pt-5">
								{#each steamUser.addons as addon}
									<Addon
										title={addon.title}
										image={addon.image}
										url={addon.url}
										viewers={addon.viewers}
										subs={addon.subs}
										lifeSubs={addon.lifeSubs}
										favs={addon.favs}
										lifeFavs={addon.lifeFavs}
										likes={addon.likes}
										dislikes={addon.dislikes}
									/>
								{/each}
							</div>
						{:else}
							<h3 class="text-center pt-4">
								{$_("statistics.noAddons")}
							</h3>
						{/if}
					</div>
					{moveView("user")}
				{/if}
			{:catch error}
				<ErrorMessage message={error} />
			{/await}
		</div>
	</section>
{/if}
