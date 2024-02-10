export const prerender = false;
export const csr = true;
export const ssr = false;

import SteamApi from "$lib/SteamApi";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
	const id = params.slug;

	return SteamApi.getSteamUser("id", id);
};
