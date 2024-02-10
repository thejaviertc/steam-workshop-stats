import type { ISteamUser } from "./ISteamUser";

const apiUrl =
	process.env.NODE_ENV === "development"
		? "http://localhost:5195"
		: "https://sws-api-uxba.onrender.com";

class SteamApi {
	/**
	 * Fetches the API and gets all the info of the User
	 */
	public async getSteamUser(type: string, value: string): Promise<ISteamUser> {
		const response = await fetch(`${apiUrl}/user/${type}/${value}`);
		const steamUser: ISteamUser = await response.json();

		return steamUser;
	}
}

export default new SteamApi();
