import { addMessages, getLocaleFromNavigator, init } from "svelte-i18n";

import en from "./languages/en.json";
import es from "./languages/es.json";
import th from "./languages/th.json";

addMessages("en", en);
addMessages("es", es);
addMessages("th", th);

init({
	fallbackLocale: "en",
	initialLocale: getLocaleFromNavigator(),
});
