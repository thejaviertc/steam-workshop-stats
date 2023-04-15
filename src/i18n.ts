import { addMessages, getLocaleFromNavigator, init } from "svelte-i18n";

import en from "./languages/en.json";
import es from "./languages/es.json";
import ptBR from "./languages/pt-BR.json";
import th from "./languages/th.json";

addMessages("en", en);
addMessages("es", es);
addMessages("pt-BR", ptBR);
addMessages("th", th);

init({
	fallbackLocale: "en",
	initialLocale: getLocaleFromNavigator(),
});
