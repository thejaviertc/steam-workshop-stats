// Scrap Module
const scrap = {};
const request = require('request-promise');
const $ = require("cheerio");

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