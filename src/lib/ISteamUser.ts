import type { IAddon } from "./IAddon";

interface ISteamUser {
	message?: string;
	steamId: string;
	username: string;
	profileImageUrl: string;
	views: number;
	subscribers: number;
	favorites: number;
	likes: number;
	dislikes: number;
	addons: IAddon[];
}

export type { ISteamUser };
