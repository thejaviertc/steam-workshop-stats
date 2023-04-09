import type IAddon from "./IAddon";

interface ISteamUser {
	message?: string;
	steamId: string;
	username: string;
	profileImage: string;
	subs: number;
	lifeSubs: number;
	favs: number;
	lifeFavs: number;
	viewers: number;
	addons: IAddon[];
}

export default ISteamUser;
