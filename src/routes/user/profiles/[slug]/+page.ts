import SteamApi from "$lib/SteamApi";

export const load = async ({ params }) => {
	const id = params.slug;

	return await SteamApi.getSteamUser("profiles", id);
};
