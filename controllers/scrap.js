// Scrap Module
const request = require("request");
const cheerio = require("cheerio");

module.exports = {
    scrap: function (req, res) {
        request("https://steamcommunity.com/sharedfiles/filedetails/?id=2143878031", (error, response, html) => {
            if (!error && response.statusCode == 200) {
                const $ = cheerio.load(html);

                const siteHeading = $(".stats_table");

                let output = siteHeading
                    .find("td")
                    .text()
                let newOutput = output.match(/[a-zA-Z]+|[0-9]+/g)

                var visitors = newOutput[0]
                let suscribers = newOutput[3]
                let favorites = newOutput[6]

                res.render('index', {
                    visitors: visitors,
                    suscribers: suscribers,
                    favorites: favorites
                });
            }
        })
    }
}