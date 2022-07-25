<script lang="ts">
	import { _ } from "svelte-i18n";
	import {
		faMagnifyingGlass,
		faStar,
		faThumbsDown,
		faThumbsUp,
		faUserGroup,
	} from "@fortawesome/free-solid-svg-icons";
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

<div class="col-12 col-md-4 col-sm-6 pb-5">
	<div class="card bg-primary rounded">
		<img class="card-img-top p-3" src={image} alt="" />
		<div class="card-body">
			<h5 class="card-title text-center">
				{title}
			</h5>
			<p class="text-center">
				<Badge
					faIcon={faStar}
					title={$_("statistics.viewers", {
						values: { viewers: viewers },
					})}
					type="success"
				/>
				<Badge
					faIcon={faUserGroup}
					title={$_("statistics.subs", {
						values: { subs: subs },
					})}
					type="warning"
				/>
				<Badge
					faIcon={faUserGroup}
					title={$_("statistics.lifeSubs", {
						values: { lifeSubs: lifeSubs },
					})}
					type="warning"
				/>
				<Badge
					faIcon={faStar}
					title={$_("statistics.favs", {
						values: { favs: favs },
					})}
					type="danger"
				/>
				<Badge
					faIcon={faStar}
					title={$_("statistics.lifeFavs", {
						values: { lifeFavs: lifeFavs },
					})}
					type="danger"
				/>
			</p>
			<p class="text-center">
				<Badge
					faIcon={faThumbsUp}
					title={$_("statistics.likes", {
						values: { likes: likes },
					})}
					type="success"
				/>
				<Badge
					faIcon={faThumbsDown}
					title={$_("statistics.dislikes", {
						values: { dislikes: dislikes },
					})}
					type="danger"
				/>
			</p>
			<div class="d-flex justify-content-center">
				<Button
					faIcon={faMagnifyingGlass}
					text={$_("statistics.seeOnSteam")}
					link={url}
				/>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.rounded {
		border-radius: 0.5rem !important;
	}
</style>
