<script lang="ts">
	import { faLanguage } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
	import { locale, _ } from "svelte-i18n";

	/**
	 * Changes the website language to the selected
	 * @param e
	 */
	function changeLanguage(e: any) {
		e.preventDefault();
		locale.set(e.target.value);
	}
</script>

<div class="dropdown dropdown-end">
	<button tabindex="-1" class="btn btn-ghost normal-case text-sm md:text-base text-gray-100"
		><Fa class="mr-2" icon={faLanguage} />Change Language</button
	>
	<ul
		tabindex="-1"
		class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52"
	>
		<li>
			<button on:click={changeLanguage} value="en" class="text-lg"
				>🇬🇧 {$_("language", { locale: "en" })}</button
			>
		</li>
		<li>
			<button on:click={changeLanguage} value="es" class="text-lg"
				>🇪🇸 {$_("language", { locale: "es" })}</button
			>
		</li>
		<li>
			<button on:click={changeLanguage} value="th" class="text-lg"
				>🇹🇭 {$_("language", { locale: "th" })}</button
			>
		</li>
		<li>
			<button class="text-lg">{$_("buttons.helpTranslating")}</button>
		</li>
	</ul>
</div>
