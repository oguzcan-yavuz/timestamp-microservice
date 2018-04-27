const express = require('express');
const moment = require('moment');
const unixTimePattern = /^\d+$/;
var router = express.Router();

function unixToNatural(miliseconds) {
    return moment.unix(miliseconds).format("MMMM DD, YYYY");
}

function naturalToUnix(humanDate) {
    return parseInt(moment.utc(humanDate).format("X"));
}

function dateMatcher(date) {
    let results = {"unix": null, "natural": null};
    if(unixTimePattern.test(date)) {
        date = parseInt(date);
        results.unix = date;
        results.natural = unixToNatural(date);
    }
    else if(moment(date).isValid()) {
        results.natural = date;
        results.unix = naturalToUnix(date);
    }
    return results;
}

router.get("/", (req, res) => {
    let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    let unixExample = 1524787200;
    let naturalExample = encodeURI("27 April, 2018");
    res.render('index', {
        url: fullUrl,
        examples: {
            unix: {
                input: unixExample,
                output: JSON.stringify(dateMatcher(unixExample))
            },
            natural: {
                input: naturalExample,
                output: JSON.stringify(dateMatcher(naturalExample))
            }
        }
    });
})

router.get("/:date", (req, res) => {
    let date = req.params.date;
    res.json(dateMatcher(date));
});

module.exports = router;
