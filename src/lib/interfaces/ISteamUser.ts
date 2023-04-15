import type IAddon from "./IAddon";

interface ISteamUser {
	errorMessage?: string;
	steamId: string;
	username: string;
	profileImage: string;
	views: number;
	subscribers: number;
	favorites: number;
	likes: number;
	dislikes: number;
	addons: IAddon[];
}

export default ISteamUser;
