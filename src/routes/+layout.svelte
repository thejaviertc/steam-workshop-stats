<script lang="ts">
	import { base } from "$app/paths";
	import Button from "$lib/Button.svelte";
	import LanguageSelector from "$lib/LanguageSelector.svelte";
	import {
		faBars,
		faChartLine,
		faLanguage,
		faMagnifyingGlass,
	} from "@fortawesome/free-solid-svg-icons";
	import { onMount } from "svelte";
	import Fa from "svelte-fa";
	import { locale, _ } from "svelte-i18n";

	import "../app.scss";
	import "../i18n";

	let navbarColor: string = "secondary";

	onMount(() => {
		window.onscroll = function () {
			navbarColor =
				document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100
					? "primary"
					: "secondary";
		};
	});
</script>

<nav class="navbar bg-{navbarColor} top-0 z-50 fixed">
	<div class="navbar-start">
		<div class="dropdown">
			<button tabindex="-1" class="btn btn-ghost md:hidden"><Fa icon={faBars} /></button>
			<ul
				tabindex="-1"
				class="menu menu-compact dropdown-content mt-6 p-2 shadow bg-secondary rounded-box w-72"
			>
				<Button class="btn-ghost" faIcon={faMagnifyingGlass} link="/fetch-user"
					>Fetch User</Button
				>
				<Button class="btn-ghost" faIcon={faMagnifyingGlass} link="/fetch-user"
					>Item 2</Button
				>
				<LanguageSelector />
			</ul>
		</div>
		<Button class="btn-ghost" faIcon={faChartLine} link="/">{$_("title")}</Button>
	</div>
	<div class="navbar-end hidden md:flex">
		<ul class="menu menu-horizontal px-1">
			<Button class="btn-ghost" faIcon={faMagnifyingGlass} link="/fetch-user"
				>Fetch User</Button
			>
			<Button class="btn-ghost" faIcon={faMagnifyingGlass} link="/fetch-user">Item 2</Button>
			<LanguageSelector />
		</ul>
	</div>
</nav>
<slot />
<footer class="relative inset-x-0 bottom-0">
	<div class="footer p-10 bg-secondary text-neutral-content">
		<div />
		<div>
			<span class="footer-title">Links</span>
			<a class="link link-hover" href="/">Item 1</a>
			<a class="link link-hover" href="/">Item 2</a>
		</div>
		<div>
			<span class="footer-title">More Info</span>
			<a class="link link-hover" href="https://github.com/thejaviertc/steam-workshop-stats"
				>Github</a
			>
			<a
				class="link link-hover"
				href="https://github.com/thejaviertc/steam-workshop-stats/blob/main/CONTRIBUTING.md"
				>Help Translating</a
			>
		</div>
	</div>
	<div class="footer footer-center px-10 pb-10 bg-secondary text-base-content">
		<p class="text-white">
			Steam Workshop Stats is a hobby project and is not affiliated with Steam or Valve. Steam
			and the Steam logo are trademarks of Valve Corporation.
		</p>
	</div>
</footer>
