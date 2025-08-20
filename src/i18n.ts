import { browser } from "$app/environment";
import { addMessages, getLocaleFromNavigator, init } from "svelte-i18n";

import en from "./languages/en.json";
import es from "./languages/es.json";
import ptBR from "./languages/pt-BR.json";
import ru from "./languages/ru.json";
import th from "./languages/th.json";

addMessages("en", en);
addMessages("es", es);
addMessages("pt-BR", ptBR);
addMessages("ru", ru);
addMessages("th", th);

let defaultLanguage: string = getLocaleFromNavigator() as string;

if (browser) {
	const lang = localStorage.getItem("lang");

	if (lang) {
		defaultLanguage = lang;
	} else {
		localStorage.setItem("lang", defaultLanguage);
	}
}

init({
	fallbackLocale: "en",
	initialLocale: defaultLanguage,
});
