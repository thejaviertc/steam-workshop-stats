// Scrap Module
const scrap = {};
const request = require('request-promise');
const $ = require("cheerio");

// const url = [
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=2143878031",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=2072552206",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=2064163638",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=1821273859",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=1707130373",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=1706110647",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=1706097473",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=1591399382",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=1586644047",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=1586640869",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=1586636847",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=1586630442",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=1391291513",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=1384845390",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=1344898873",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=1343453090",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=1129397431",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=951229129",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=951100143",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=951097085",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=856663574",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=856264732",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=856202832",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=851871971",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=851569336",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=843988439",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=836933262",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=835525732",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=820160895",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=819453573",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=766496731",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=766121584",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=766115310",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=746885345",
//     "https://steamcommunity.com/sharedfiles/filedetails/?id=746402915"
// ];

let url = [];

scrap.getUrl = (req, res) => {
    let urlRaw = [];
    const { id, quantity } = req.body;
    console.log(req.body)
    if (quantity <= 0) {
        return res.redirect("/")
    }
    if (quantity >= 1 && quantity <= 30) {
        urlRaw.push(
            "https://steamcommunity.com/id/" + id + "/myworkshopfiles/?p=1&numperpage=30"
        )
    }
    if (quantity > 30 && quantity <= 60) {
        urlRaw.push(
            "https://steamcommunity.com/id/" + id + "/myworkshopfiles/?p=1&numperpage=30",
            "https://steamcommunity.com/id/" + id + "/myworkshopfiles/?p=2&numperpage=30"
        )
    }
    if (quantity > 60 && quantity <= 90) {
        urlRaw.push(
            "https://steamcommunity.com/id/" + id + "/myworkshopfiles/?p=1&numperpage=30",
            "https://steamcommunity.com/id/" + id + "/myworkshopfiles/?p=2&numperpage=30",
            "https://steamcommunity.com/id/" + id + "/myworkshopfiles/?p=3&numperpage=30"
        )
    }
    let results = [];
    urlRaw.forEach(function (url) {
        request(url)
            .then(html => {
                const items = $('.workshopItem', html);
                items.each((i, el) => {
                    results.push(
                        $('a', el).attr("href")
                    )
                });
            })
            .catch(error => {
                console.log(error);
            });
    });
    setTimeout(() => {
        url = results
        res.redirect("/workshop")
    }, 2000);
}

scrap.getInfo = (req, res) => {
    let results = [];
    url.forEach(function (url) {
        request(url)
            .then(html => {
                results.push({
                    name: $('.workshopItemTitle', html).text(),
                    stars: $('.fileRatingDetails img', html).attr("src"),
                    image: $('#previewImageMain', html).attr("src"),
                    viewers: $('tbody tr:nth-child(1) td:nth-child(1)', html).text(),
                    subs: $('tbody tr:nth-child(2) td:nth-child(1)', html).text(),
                    favs: $('tbody tr:nth-child(3) td:nth-child(1)', html).text()
                })
            })
            .catch(error => {
                console.log(error);
            });
    });
    setTimeout(() => {
        let viewersArrayString = [];
        let subsArrayString = [];
        let favsArrayString = [];
        let i;

        for (i = 0; i < results.length; i++) {
            viewersArrayString.push(
                results[i].viewers.replace(",", '')
            )
        }

        for (i = 0; i < results.length; i++) {
            subsArrayString.push(
                results[i].subs.replace(",", '')
            )
        }

        for (i = 0; i < results.length; i++) {
            favsArrayString.push(
                results[i].favs.replace(",", '')
            )
        }

        let viewersArray = viewersArrayString.map(Number).reduce((a, b) => a + b, 0);
        let subsArray = subsArrayString.map(Number).reduce((a, b) => a + b, 0);
        let favsArray = favsArrayString.map(Number).reduce((a, b) => a + b, 0);

        res.render('workshop', {
            array: results,
            viewers: viewersArray,
            subs: subsArray,
            favs: favsArray
        });
    }, 7000);
}

module.exports = scrap;