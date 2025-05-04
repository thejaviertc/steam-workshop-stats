<script lang="ts">
	import { faLanguage, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
	import { _, locale } from "svelte-i18n";

	/**
	 * Changes the website language to the selected
	 */
	function changeLanguage(e: Event) {
		e.preventDefault();

		const language = (e.target as HTMLButtonElement).value;
		locale.set(language);
		localStorage.setItem("lang", language);
	}
</script>

<div class="dropdown dropdown-end">
	<button tabindex="-1" class="btn btn-ghost normal-case text-sm md:text-base text-gray-100">
		<Fa class="mr-2" icon={faLanguage} />{$_("actions.changeLanguage")}
	</button>
	<ul
		tabindex="-1"
		class="menu menu-compact dropdown-content mt-3 p-2 shadow-sm bg-secondary rounded-box w-52"
	>
		<li>
			<button on:click={changeLanguage} value="en" class="text-lg">
				🇬🇧 {$_("language", { locale: "en" })}
			</button>
		</li>
		<li>
			<button on:click={changeLanguage} value="es" class="text-lg">
				🇪🇸 {$_("language", { locale: "es" })}
			</button>
		</li>
		<li>
			<button on:click={changeLanguage} value="pt-BR" class="text-lg">
				🇧🇷 {$_("language", { locale: "pt-BR" })}
				<Fa icon={faScrewdriverWrench} />
			</button>
		</li>
		<li>
			<button on:click={changeLanguage} value="th" class="text-lg">
				🇹🇭 {$_("language", { locale: "th" })}
			</button>
		</li>
		<li>
			<a
				class="text-lg"
				href="https://github.com/thejaviertc/steam-workshop-stats/blob/main/CONTRIBUTING.md"
			>
				{$_("actions.helpTranslating")}
			</a>
		</li>
	</ul>
</div>
