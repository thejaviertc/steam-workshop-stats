import { addMessages, getLocaleFromNavigator, init } from "svelte-i18n";

import en from "./languages/en.json";
import es from "./languages/es.json";

addMessages("en", en);
addMessages("es", es);

init({
	fallbackLocale: "en",
	initialLocale: getLocaleFromNavigator(),
});
