<script lang="ts">
	import type IAddon from "$lib/interfaces/IAddon";
	import type ISteamUser from "$lib/interfaces/ISteamUser";

	import Addon from "$lib/Addon.svelte";
	import Notification from "$lib/Notification.svelte";
	import {
		faCircleInfo,
		faExclamationCircle,
		faEye,
		faMagnifyingGlass,
		faStar,
		faThumbsDown,
		faThumbsUp,
		faUser,
	} from "@fortawesome/free-solid-svg-icons";
	import { Chart, registerables } from "chart.js";
	import { Line } from "svelte-chartjs";
	import Fa from "svelte-fa";
	import { _ } from "svelte-i18n";

	// Registers all the elements of the chart automatically
	Chart.register(...registerables);

	let oldUrl: string = "";
	let url: string = "";
	let isSubmitted: boolean = false;
	let tab: string = "addon";
	const apiUrl =
		process.env.NODE_ENV === "development"
			? "http://localhost:3000"
			: "https://javiertcs-api.onrender.com";

	/**
	 * Fetches the API and gets all the info of the Steam URL
	 */
	async function fetchSteamUser() {
		oldUrl = url;

		// const response = await fetch(`${apiUrl}/steam-workshop-stats?url=${url}`);

		// const steamUser = await response.json();

		const steamUser: ISteamUser = {
			steamId: "76561198117127629",
			username: "javiertc",
			profileImage:
				"https://avatars.akamai.steamstatic.com/ec9f8b753df977a12e6cad632a14cc1a50b3e0b0_full.jpg",
			subs: 30893,
			lifeSubs: 95404,
			favs: 1014,
			lifeFavs: 1173,
			viewers: 25769,
			addons: [
				{
					id: "2535605925",
					title: "[Photon] Dodge Charger Policia Nacional",
					image: "https://steamuserimages-a.akamaihd.net/ugc/1699528882257864537/ECFD11D2028D01BEBDC91F9599F17544ADF4D0D7/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2535605925",
					subs: 479,
					lifeSubs: 1085,
					favs: 18,
					lifeFavs: 19,
					viewers: 342,
					likes: 11,
					dislikes: 3,
				},
				{
					id: "2430502795",
					title: "Modelos SAMUR Protección Civil",
					image: "https://steamuserimages-a.akamaihd.net/ugc/1750184828979458722/4F17FE49DD2D82CBC4A59AA5D408A0540BBFB3E5/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2430502795",
					subs: 512,
					lifeSubs: 1338,
					favs: 9,
					lifeFavs: 9,
					viewers: 205,
					likes: 4,
					dislikes: 1,
				},
				{
					id: "2143878031",
					title: "[Photon] Toyota Land Cruiser Policía Nacional",
					image: "https://steamuserimages-a.akamaihd.net/ugc/1699529003963133188/EAD3AFEE081032BEAF948583E87257424F23405D/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2143878031",
					subs: 681,
					lifeSubs: 1821,
					favs: 25,
					lifeFavs: 27,
					viewers: 330,
					likes: 18,
					dislikes: 3,
				},
				{
					id: "2072552206",
					title: "Modelos Policía Municipal Madrid - Playermodel",
					image: "https://steamuserimages-a.akamaihd.net/ugc/1012690662465926894/B281543C0EE060D9151CD20038DCE15C74F8617D/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2072552206",
					subs: 90,
					lifeSubs: 234,
					favs: 8,
					lifeFavs: 10,
					viewers: 218,
					likes: 7,
					dislikes: 1,
				},
				{
					id: "2064163638",
					title: "Modelos Guardia Civil - Playermodel",
					image: "https://steamuserimages-a.akamaihd.net/ugc/1012689924697973097/C60AB3F82F3B5F48F33BBD85E4F1BF085E86893B/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2064163638",
					subs: 780,
					lifeSubs: 1611,
					favs: 34,
					lifeFavs: 40,
					viewers: 914,
					likes: 21,
					dislikes: 2,
				},
				{
					id: "1821273859",
					title: "Modelos Policía Nacional España",
					image: "https://steamuserimages-a.akamaihd.net/ugc/786360440445623275/E447CB6089908E6BEEC2407F4597709151817C9B/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=1821273859",
					subs: 1146,
					lifeSubs: 2510,
					favs: 25,
					lifeFavs: 28,
					viewers: 476,
					likes: 10,
					dislikes: 3,
				},
				{
					id: "1707130373",
					title: "[Photon] BMW X5 Samur VIR",
					image: "https://steamuserimages-a.akamaihd.net/ugc/965368099202453164/D003D05DB6A077B1B3C99502A9597E38995FA614/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=1707130373",
					subs: 434,
					lifeSubs: 1389,
					favs: 22,
					lifeFavs: 24,
					viewers: 346,
					likes: 16,
					dislikes: 4,
				},
				{
					id: "1706110647",
					title: "[Photon] Mercedes Sprinter SWB Samur SVA",
					image: "https://steamuserimages-a.akamaihd.net/ugc/965368099197879732/FF6ABA8C4619DC533386487D27917312A005D210/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=1706110647",
					subs: 670,
					lifeSubs: 1969,
					favs: 24,
					lifeFavs: 25,
					viewers: 416,
					likes: 15,
					dislikes: 1,
				},
				{
					id: "1706097473",
					title: "[Photon] Citroën C4 Policía Nacional",
					image: "https://steamuserimages-a.akamaihd.net/ugc/965368099197835621/BDB7C966A0EE7F16F9C5F934CEF301F3BE24AEB9/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=1706097473",
					subs: 1023,
					lifeSubs: 2794,
					favs: 31,
					lifeFavs: 35,
					viewers: 603,
					likes: 24,
					dislikes: 3,
				},
				{
					id: "1591399382",
					title: "[Photon] Mercedes V-Class Policía Nacional UPR",
					image: "https://steamuserimages-a.akamaihd.net/ugc/948469192031624629/64D0B0277D877A02FF4B10EDBD106BC0A94190D5/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=1591399382",
					subs: 1069,
					lifeSubs: 3052,
					favs: 28,
					lifeFavs: 30,
					viewers: 459,
					likes: 30,
					dislikes: 7,
				},
				{
					id: "1586644047",
					title: "[Photon] Mercedes Sprinter SWB Mossos d'Esquadra",
					image: "https://steamuserimages-a.akamaihd.net/ugc/955223864109185961/5FFD9E78D5D7BC1A770DA372AD2DABC64D46E4A8/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=1586644047",
					subs: 906,
					lifeSubs: 2913,
					favs: 40,
					lifeFavs: 46,
					viewers: 1050,
					likes: 39,
					dislikes: 9,
				},
				{
					id: "1586640869",
					title: "[Photon] Mercedes Sprinter SWB PC Alcobendas",
					image: "https://steamuserimages-a.akamaihd.net/ugc/955223864109174843/535E3DA3DD576C444F2BC5D5C59BE72B04EAE26D/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=1586640869",
					subs: 337,
					lifeSubs: 1121,
					favs: 12,
					lifeFavs: 12,
					viewers: 308,
					likes: 12,
					dislikes: 4,
				},
				{
					id: "1586636847",
					title: "[Photon] Mercedes V-Class Guardia Civil de Tráfico",
					image: "https://steamuserimages-a.akamaihd.net/ugc/955223864109160060/298E126D3831041D9F38D69A552D5FAEB4A8E522/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=1586636847",
					subs: 517,
					lifeSubs: 1615,
					favs: 20,
					lifeFavs: 23,
					viewers: 480,
					likes: 23,
					dislikes: 3,
				},
				{
					id: "1586630442",
					title: "[Photon] Chevrolet Tahoe Summa 112 VIR",
					image: "https://steamuserimages-a.akamaihd.net/ugc/955223864109135232/C424A8A5D9189CE039BC6C1B11E55B5746010A21/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=1586630442",
					subs: 321,
					lifeSubs: 1028,
					favs: 13,
					lifeFavs: 14,
					viewers: 284,
					likes: 10,
					dislikes: 4,
				},
				{
					id: "1391291513",
					title: "[Photon] Ford Focus Policia Municipal Madrid",
					image: "https://steamuserimages-a.akamaihd.net/ugc/955223864103920741/3EECEE302D585ABD4A23A5CAFF72980AFC4C2A1C/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=1391291513",
					subs: 854,
					lifeSubs: 2528,
					favs: 32,
					lifeFavs: 39,
					viewers: 698,
					likes: 23,
					dislikes: 6,
				},
				{
					id: "1384845390",
					title: "[Photon] Peugeot 308 Bescam Getafe",
					image: "https://steamuserimages-a.akamaihd.net/ugc/955223864103922956/AA33AE1E9D2630F8EC8DF5EB5E8ACB3DA59AC616/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=1384845390",
					subs: 210,
					lifeSubs: 619,
					favs: 12,
					lifeFavs: 13,
					viewers: 199,
					likes: 14,
					dislikes: 2,
				},
				{
					id: "1344898873",
					title: "[Photon] Tanqueta CNP UIP",
					image: "https://steamuserimages-a.akamaihd.net/ugc/955223864105772001/1CD6D06D04CECD6B1A0BE2EBE725E9DE9B775511/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=1344898873",
					subs: 1113,
					lifeSubs: 3757,
					favs: 61,
					lifeFavs: 79,
					viewers: 1877,
					likes: 38,
					dislikes: 8,
				},
				{
					id: "1343453090",
					title: "[Photon] Hummer CNP URO UIP",
					image: "https://steamuserimages-a.akamaihd.net/ugc/955223864103894238/C99EAC500D11DE982D67044F8AF25109D7E415AA/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=1343453090",
					subs: 860,
					lifeSubs: 2514,
					favs: 29,
					lifeFavs: 33,
					viewers: 481,
					likes: 8,
					dislikes: 4,
				},
				{
					id: "1129397431",
					title: "[Photon] Ford F350 Emerxencias Sanitarias",
					image: "https://steamuserimages-a.akamaihd.net/ugc/955223864103873731/5EBFF62FECB6172B78F9109E3802F995C7A53E6E/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=1129397431",
					subs: 245,
					lifeSubs: 726,
					favs: 13,
					lifeFavs: 13,
					viewers: 263,
					likes: 9,
					dislikes: 4,
				},
				{
					id: "951229129",
					title: "[Photon] Dodge Charger GENSEC Payday 2",
					image: "https://steamuserimages-a.akamaihd.net/ugc/955223864105760454/016D13FB9F08FE212D1307048A726D36008850E8/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=951229129",
					subs: 393,
					lifeSubs: 1944,
					favs: 27,
					lifeFavs: 39,
					viewers: 1112,
					likes: 13,
					dislikes: 7,
				},
				{
					id: "951100143",
					title: "[Photon] Luces Coches de España",
					image: "https://steamuserimages-a.akamaihd.net/ugc/955223864105722766/0F2D091D511B29576D1F76EB7063135E2C293720/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=951100143",
					subs: 3435,
					lifeSubs: 10121,
					favs: 112,
					lifeFavs: 133,
					viewers: 4137,
					likes: 29,
					dislikes: 5,
				},
				{
					id: "951097085",
					title: "[Photon] Hummer CNP GEO",
					image: "https://steamuserimages-a.akamaihd.net/ugc/965368099197851092/CD18B66FDB1EBC0BA893E26CF9D8C6B6E5F0381E/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=951097085",
					subs: 1557,
					lifeSubs: 5003,
					favs: 42,
					lifeFavs: 50,
					viewers: 1240,
					likes: 22,
					dislikes: 10,
				},
				{
					id: "856663574",
					title: "[Photon] BMW M6 Policia Municipal Madrid",
					image: "https://steamuserimages-a.akamaihd.net/ugc/955223864103857705/E4B87DF51991782FE5E6F72D23E88A38A40818F9/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=856663574",
					subs: 331,
					lifeSubs: 1385,
					favs: 13,
					lifeFavs: 14,
					viewers: 405,
					likes: 7,
					dislikes: 6,
				},
				{
					id: "856264732",
					title: "[Photon] Ford F350 Samur",
					image: "https://steamuserimages-a.akamaihd.net/ugc/955223864105657367/583220F907731685A1590EC56911959FDB942C6A/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=856264732",
					subs: 1743,
					lifeSubs: 5110,
					favs: 27,
					lifeFavs: 32,
					viewers: 386,
					likes: 9,
					dislikes: 6,
				},
				{
					id: "856202832",
					title: "[Photon] Chevrolet Tahoe Policia Nacional",
					image: "https://steamuserimages-a.akamaihd.net/ugc/948469192031654710/C79D35D07982BE026DD36B04AE28E011DEC3801E/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=856202832",
					subs: 1520,
					lifeSubs: 4653,
					favs: 33,
					lifeFavs: 38,
					viewers: 794,
					likes: 19,
					dislikes: 6,
				},
				{
					id: "851871971",
					title: "[Photon] Mercedes Sprinter SWB Cruz Roja",
					image: "https://steamuserimages-a.akamaihd.net/ugc/955223864105645173/A979F443D317019B7C06C90DA80FC566A452D91B/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=851871971",
					subs: 531,
					lifeSubs: 2007,
					favs: 24,
					lifeFavs: 27,
					viewers: 682,
					likes: 21,
					dislikes: 5,
				},
				{
					id: "851569336",
					title: "[Photon] Mercedes Sprinter SWB Atencion Ciudadana Madrid",
					image: "https://steamuserimages-a.akamaihd.net/ugc/955223864103827953/18E05D1A37A97B85E9674038453FAC34BDEF8F6F/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=851569336",
					subs: 298,
					lifeSubs: 1086,
					favs: 12,
					lifeFavs: 13,
					viewers: 314,
					likes: 12,
					dislikes: 3,
				},
				{
					id: "843988439",
					title: "[Photon] Scania Truck Bomberos Madrid",
					image: "https://steamuserimages-a.akamaihd.net/ugc/955223864104913253/928CB0DD4C758DB61655DDA1A8442F297DF2B107/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=843988439",
					subs: 942,
					lifeSubs: 3331,
					favs: 25,
					lifeFavs: 29,
					viewers: 844,
					likes: 23,
					dislikes: 9,
				},
				{
					id: "836933262",
					title: "[Photon] Ford Shelby Policía Nacional",
					image: "https://steamuserimages-a.akamaihd.net/ugc/955223864104903742/C28F7D0907C3380DD44F61FA35A191AB0F204BEC/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=836933262",
					subs: 1185,
					lifeSubs: 3898,
					favs: 31,
					lifeFavs: 35,
					viewers: 643,
					likes: 22,
					dislikes: 5,
				},
				{
					id: "835525732",
					title: "[Photon] Porsche Cayenne S URE Samur",
					image: "https://steamuserimages-a.akamaihd.net/ugc/955223864104855457/479DF506D98591182DA1A9DEDD01906C853CF3D9/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=835525732",
					subs: 621,
					lifeSubs: 2083,
					favs: 14,
					lifeFavs: 17,
					viewers: 286,
					likes: 4,
					dislikes: 7,
				},
				{
					id: "820160895",
					title: "[Photon] Mercedes Sprinter SWB CNP UIP",
					image: "https://steamuserimages-a.akamaihd.net/ugc/955223864103669604/E43537DFE7F32BEB19B54CE137793FD7514D367A/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=820160895",
					subs: 1289,
					lifeSubs: 3964,
					favs: 34,
					lifeFavs: 41,
					viewers: 800,
					likes: 22,
					dislikes: 7,
				},
				{
					id: "819453573",
					title: "[Photon] Mercedes Sprinter SWB Summa 112",
					image: "https://steamuserimages-a.akamaihd.net/ugc/955223864103806969/7ED57D14276942F9811E87347181E255ADAF1739/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=819453573",
					subs: 520,
					lifeSubs: 1781,
					favs: 15,
					lifeFavs: 17,
					viewers: 431,
					likes: 15,
					dislikes: 8,
				},
				{
					id: "766496731",
					title: "[Photon] Renault Megane Policia Municipal de Madrid",
					image: "https://steamuserimages-a.akamaihd.net/ugc/955223864104815734/F3AADBA6C9E6BDE2E198CD1AADCE440D03F0FB2F/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=766496731",
					subs: 775,
					lifeSubs: 2643,
					favs: 23,
					lifeFavs: 28,
					viewers: 531,
					likes: 28,
					dislikes: 4,
				},
				{
					id: "766121584",
					title: "[Photon] Unmarked Mercedes-Benz G65 AMG",
					image: "https://steamuserimages-a.akamaihd.net/ugc/955223864104806875/72714B02FAFDFC04528A96FD8E7301B5A87CE41A/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=766121584",
					subs: 1003,
					lifeSubs: 3332,
					favs: 26,
					lifeFavs: 30,
					viewers: 978,
					likes: 30,
					dislikes: 10,
				},
				{
					id: "766115310",
					title: "[Photon] Ambulancia Samur Madrid",
					image: "https://steamuserimages-a.akamaihd.net/ugc/955223864101903427/F02E4C3F4CB22EDBDF7CDB7B6B7D0410759E1917/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=766115310",
					subs: 805,
					lifeSubs: 2691,
					favs: 25,
					lifeFavs: 27,
					viewers: 631,
					likes: 9,
					dislikes: 5,
				},
				{
					id: "746885345",
					title: "[Photon] Chevrolet Tahoe Guardia Civil",
					image: "https://steamuserimages-a.akamaihd.net/ugc/955223864101888550/E727D0E07840216DE63EE153A05359F24679CB31/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=746885345",
					subs: 858,
					lifeSubs: 2934,
					favs: 41,
					lifeFavs: 45,
					viewers: 785,
					likes: 23,
					dislikes: 9,
				},
				{
					id: "746402915",
					title: "[Photon] Renault Megane Guardia Civil",
					image: "https://steamuserimages-a.akamaihd.net/ugc/955223864101875317/4585DBA45D37D18F234BE0AF18D303F6E0D115E1/",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=746402915",
					subs: 840,
					lifeSubs: 2814,
					favs: 34,
					lifeFavs: 39,
					viewers: 821,
					likes: 20,
					dislikes: 5,
				},
			],
		};

		if (steamUser.message) throw steamUser.message;

		return steamUser;
	}

	/**
	 * Handles the form
	 */
	function submitSteamUser() {
		if (oldUrl != url) {
			isSubmitted = false;

			// Delay of 100ms for Svelte noticing the variable updated
			setTimeout(() => {
				isSubmitted = true;
			}, 100);
		}
	}

	/**
	 * Prepares the data for the graph from the ISteamUser
	 * @param steamUser ISteamUser
	 */
	function prepareGraphData(steamUser: ISteamUser) {
		return {
			labels: steamUser.addons.map(function (addon: IAddon) {
				return addon["title"];
			}),
			datasets: [
				{
					label: $_("stats.views"),
					data: steamUser.addons.map(function (addon: IAddon) {
						return addon["viewers"];
					}),
					borderColor: "rgb(25, 135, 84)",
					backgroundColor: "rgba(25, 135, 84, 0.5)",
				},
				{
					label: $_("stats.subscribers"),
					data: steamUser.addons.map(function (addon: IAddon) {
						return addon["subs"];
					}),
					borderColor: "rgb(255, 193, 7)",
					backgroundColor: "rgba(255, 193, 7, 0.5)",
				},
				{
					label: $_("stats.favorites"),
					data: steamUser.addons.map(function (addon: IAddon) {
						return addon["favs"];
					}),
					borderColor: "rgb(220, 53, 69)",
					backgroundColor: "rgba(220, 53, 69, 0.5)",
				},
			],
		};
	}

	/**
	 * Changes the website language to the selected
	 * @param e
	 */
	function changeTab(e: any) {
		e.preventDefault();
		tab = e.target.value;
	}
</script>

<svelte:head>
	<title>Steam Workshop Stats</title>
</svelte:head>

<section class="min-h-screen mt-28">
	<form on:submit|preventDefault={submitSteamUser} class="flex flex-col items-center">
		<h2>{$_("actions.enterProfileUrl")}</h2>
		<input
			type="text"
			class="input input-bordered input-accent text-center w-3/4 my-6"
			placeholder="{$_('misc.example')} https://steamcommunity.com/id/javiertc/"
			bind:value={url}
			required
		/>
		<button type="submit" class="btn btn-accent">
			<Fa class="mr-2 " icon={faMagnifyingGlass} />
			{$_("actions.getStats")}
		</button>
	</form>
	{#if isSubmitted}
		{#await fetchSteamUser()}
			<Notification class="bg-warning" faIcon={faCircleInfo}>
				{$_("notifications.disclaimer")}
			</Notification>
		{:then steamUser}
			<div class="flex flex-col items-center py-8">
				<h2>
					{$_("statistics.title", {
						values: { username: steamUser.username },
					})}
				</h2>
				<img
					src={steamUser.profileImage}
					class="h-44 my-8 rounded-full"
					alt="Steam Profile"
				/>
				{#if steamUser.addons.length > 0}
					<div
						class="stats stats-vertical lg:stats-horizontal shadow bg-secondary text-gray-100"
					>
						<div class="stat">
							<div class="stat-title text-gray-100">{$_("stats.views")}</div>
							<div class="stat-value">
								<Fa icon={faEye} />
								{steamUser.viewers.toLocaleString()}
							</div>
						</div>
						<div class="stat">
							<div class="stat-title text-gray-100">{$_("stats.subscribers")}</div>
							<div class="stat-value">
								<Fa icon={faUser} />
								{steamUser.subs.toLocaleString()}
							</div>
						</div>
						<div class="stat">
							<div class="stat-title text-gray-100">{$_("stats.favorites")}</div>
							<div class="stat-value">
								<Fa icon={faStar} />
								{steamUser.favs.toLocaleString()}
							</div>
						</div>
						<div class="stat">
							<div class="stat-title text-gray-100">{$_("stats.likes")}</div>
							<div class="stat-value">
								<Fa icon={faThumbsUp} />
								{steamUser.lifeFavs.toLocaleString()}
							</div>
						</div>
						<div class="stat">
							<div class="stat-title text-gray-100">{$_("stats.dislikes")}</div>
							<div class="stat-value">
								<Fa icon={faThumbsDown} />
								{steamUser.lifeFavs.toLocaleString()}
							</div>
						</div>
					</div>
					<div class="flex gap-4 my-8">
						<button
							on:click={changeTab}
							value="addon"
							class="btn btn-accent {tab === 'addon' ? '' : 'btn-outline'}"
							>{$_("stats.addons")}</button
						>
						<button
							on:click={changeTab}
							value="graph"
							class="btn btn-accent {tab === 'graph' ? '' : 'btn-outline'}"
							>{$_("stats.graph")}</button
						>
					</div>
					{#if tab === "addon"}
						<h2 class="mb-8">
							{$_("statistics.addons", {
								values: { username: steamUser.username },
							})}
						</h2>
						<div class="grid grid-cols-5 gap-8 mx-8">
							{#each steamUser.addons as addon}
								<Addon
									title={addon.title}
									image={addon.image}
									url={addon.url}
									viewers={addon.viewers}
									subs={addon.subs}
									favs={addon.favs}
									likes={addon.likes}
									dislikes={addon.dislikes}
								/>
							{/each}
						</div>
					{:else}
						<h2>
							{$_("stats.graphOf", {
								values: { username: steamUser.username },
							})}
						</h2>
						<div
							class="container mx-auto my-10 hidden md:block bg-secondary px-10 py-6 rounded-xl"
						>
							<Line data={prepareGraphData(steamUser)} />
						</div>
					{/if}
				{:else}
					<h3 class="text-center mt-10">
						{$_("statistics.noAddons")}
					</h3>
				{/if}
			</div>
		{:catch error}
			<Notification class="bg-error" faIcon={faExclamationCircle}>{error}</Notification>
		{/await}
	{/if}
</section>
