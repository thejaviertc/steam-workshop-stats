<script lang="ts">
	import "../app.scss";
	import "../i18n";

	import { base } from "$app/paths";
	import Button from "$components/Button.svelte";
	import LanguageSelector from "$components/LanguageSelector.svelte";
	import { faBars, faChartLine, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
	import { onMount } from "svelte";
	import Fa from "svelte-fa";
	import { _ } from "svelte-i18n";

	let navbarColor: string = "secondary";

	onMount(() => {
		window.onscroll = () => {
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
			<button tabindex="-1" class="btn btn-ghost md:hidden pr-0"><Fa icon={faBars} /></button>
			<ul
				tabindex="-1"
				class="menu menu-compact dropdown-content mt-6 p-2 shadow bg-secondary rounded-box w-72"
			>
				<Button class="btn-ghost" faIcon={faMagnifyingGlass} link="{base}/fetch-user">
					{$_("actions.fetchUser")}
				</Button>
				<LanguageSelector />
			</ul>
		</div>
		<Button class="btn-ghost ml-0" faIcon={faChartLine} link={base}>{$_("title")}</Button>
		<a href="https://github.com/thejaviertc/steam-workshop-stats">
			<img
				src="https://img.shields.io/github/v/release/thejaviertc/steam-workshop-stats"
				alt="version"
			/>
		</a>
	</div>
	<div class="navbar-end hidden md:flex">
		<ul class="menu menu-horizontal px-1">
			<Button class="btn-ghost" faIcon={faMagnifyingGlass} link="{base}/fetch-user">
				{$_("actions.fetchUser")}
			</Button>
			<LanguageSelector />
		</ul>
	</div>
</nav>
<slot />
<footer class="relative inset-x-0 bottom-0">
	<div class="footer p-10 bg-secondary text-neutral-content">
		<div />
		<div>
			<span class="footer-title">{$_("misc.links")}</span>
			<p>{$_("actions.trackMyStats")}</p>
			<a class="link link-hover" href="{base}/fetch-user">{$_("actions.fetchUser")}</a>
		</div>
		<div>
			<span class="footer-title">{$_("misc.moreInfo")}</span>
			<a class="link link-hover" href="https://github.com/thejaviertc/steam-workshop-stats">
				{$_("misc.githubRepository")}
			</a>
			<a
				class="link link-hover"
				href="https://github.com/thejaviertc/steam-workshop-stats/blob/main/CONTRIBUTING.md"
			>
				{$_("actions.helpTranslating")}
			</a>
		</div>
	</div>
	<div class="footer footer-center px-10 pb-10 bg-secondary text-base-content">
		<p class="text-white">
			{$_("disclaimer")}
		</p>
	</div>
</footer>
