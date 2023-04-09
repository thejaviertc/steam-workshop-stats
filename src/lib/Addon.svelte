<script lang="ts">
	import {
		faEye,
		faMagnifyingGlass,
		faStar,
		faThumbsDown,
		faThumbsUp,
		faUser,
	} from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
	import Button from "./Button.svelte";

	export let title: string;
	export let image: string;
	export let url: string;
	export let viewers: number;
	export let subs: number;
	export let favs: number;
	export let likes: number;
	export let dislikes: number;
</script>

<div class="card bg-secondary shadow-xl text-center">
	<figure><img src={image} alt="Addon Logo" /></figure>
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<div class="my-2">
			<div class="flex justify-center gap-6">
				<h5>
					<Fa icon={faEye} />
					{viewers.toLocaleString()}
				</h5>
				<h5>
					<Fa icon={faUser} />
					{subs.toLocaleString()}
				</h5>
				<h5>
					<Fa icon={faStar} />
					{favs.toLocaleString()}
				</h5>
			</div>
			<div class="flex justify-center gap-6 mt-2">
				<h5>
					<Fa icon={faThumbsUp} />
					{likes.toLocaleString()}
				</h5>
				<h5>
					<Fa icon={faThumbsDown} />
					{dislikes.toLocaleString()}
				</h5>
			</div>
		</div>
		<div class="card-actions justify-center">
			<Button class="btn-accent" faIcon={faMagnifyingGlass} link={url}>View in Steam</Button>
		</div>
	</div>
</div>
