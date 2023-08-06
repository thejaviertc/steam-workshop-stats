import type ISteamUser from "./ISteamUser";

const apiUrl =
	// eslint-disable-next-line no-undef
	process.env.NODE_ENV === "development"
		? "http://localhost:3000"
		: "https://steam-workshop-stats-api.onrender.com";

class SteamApi {
	public async getSteamUser(type: string, value: string): Promise<ISteamUser> {
		const response = await fetch(`${apiUrl}/steam-user/${type}/${value}`);
		const steamUser: ISteamUser = await response.json();

		if (steamUser.errorMessage) {
			throw steamUser.errorMessage;
		}

		return steamUser;
	}
}

export default new SteamApi();
