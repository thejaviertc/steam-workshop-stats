// Scrap Module Dependencies
const scrap = {};
const request = require('request-promise');

// Module Export
module.exports = function () {
    this.getAddonList = function (req, res) {
        // Required Data
        const { steamId, gameId } = req.body;

        // getNumberAddons
        request.get("https://api.steampowered.com/IPublishedFileService/GetUserFiles/v1/?key=" + process.env.STEAM_API_KEY + "&steamid=" + steamId + "&appid=" + gameId + "&totalonly=1", (error, resp, body) => {
            const data = JSON.parse(body);
            const numberAddons = data["response"].total;

            // getUserName
            request.get("https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=" + process.env.STEAM_API_KEY + "&steamids=" + steamId, (error, resp, body) => {
                const data = JSON.parse(body);
                const userName = data["response"].players[0].personaname;

                // getAddonsIds
                request.get("https://api.steampowered.com/IPublishedFileService/GetUserFiles/v1/?key=" + process.env.STEAM_API_KEY + "&steamid=" + steamId + "&appid=" + gameId + "&numperpage=" + numberAddons + "&ids_only=1&sortmethod=date", (error, resp, body) => {
                    const data = JSON.parse(body);
                    const idsList = [];

                    // Add all ids to the array
                    for (let i = 0; i < numberAddons; i++)
                        idsList.push(data["response"].publishedfiledetails[i].publishedfileid);

                    // Data for the last request
                    let requestData = {
                        "format": 'json',
                        "itemcount": idsList.length
                    }

                    // Add the IDs to the requestData
                    for (let i = 0; i < idsList.length; i++) {
                        requestData['publishedfileids[' + i + ']'] = idsList[i];
                    }

                    // Get All Addon Stats
                    request.post("https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/", { form: requestData }, (error, resp, body) => {
                        const data = JSON.parse(body);

                        let finalResults = [];

                        // Add the stats to finalResults
                        for (let i = 0; i < idsList.length; i++) {
                            finalResults.push({
                                image: data["response"].publishedfiledetails[i].preview_url,
                                title: data["response"].publishedfiledetails[i].title,
                                subs: data["response"].publishedfiledetails[i].subscriptions,
                                favs: data["response"].publishedfiledetails[i].favorited,
                                lifeSubs: data["response"].publishedfiledetails[i].lifetime_subscriptions,
                                lifeFavs: data["response"].publishedfiledetails[i].lifetime_favorited,
                                views: data["response"].publishedfiledetails[i].views
                            })
                        }

                        // Last Variables
                        let totalSubs = 0, totalFavs = 0, totalLifeSubs = 0, totalLifeFavs = 0, totalViewers = 0;

                        // Get All Totals
                        for (let i = 0; i < idsList.length; i++) {
                            totalSubs += finalResults[i].subs;
                            totalFavs += finalResults[i].favs;
                            totalLifeSubs += finalResults[i].lifeSubs;
                            totalLifeFavs += finalResults[i].lifeFavs;
                            totalViewers += finalResults[i].views;
                        }

                        // Render all the data requested
                        res.render("workshop", {
                            user: userName,
                            array: finalResults,
                            subs: totalSubs,
                            favs: totalFavs,
                            lifeSubs: totalLifeSubs,
                            lifeFavs: totalLifeFavs,
                            viewers: totalViewers
                        });
                    })
                })
            })
        })
    };
}