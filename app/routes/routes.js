const express = require('express');
const moment = require('moment');
const unixTimePattern = /^\/\d+$/;
const humanDatePattern = /^\/(January|February|March|April|May|June|July|August|September|October|November|December)%\d{4},%\d{6}$/;  // date parser?
var router = express.Router();

router.get("/", (req, res) => {
    res.send("home!");
});

router.get(unixTimePattern, (req, res) => {
    let unixTime = parseInt(req.url.split("").splice(1).join(""));
    let natural = moment(unixTime).format("MMMM DD, YYYY");
    let results = {
        unix: unixTime,
        natural: natural
    };
    res.json(results);
});

router.get(humanDatePattern, (req, res) => {
    res.send("home!");
});

module.exports = router;
