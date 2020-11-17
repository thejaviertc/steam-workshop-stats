// Global Dependencies
const express = require('express');
const router = express.Router();

// Controllers
const scrap = require("../controllers/scrap");

// Index Route
router.get('/', (req, res) => {
    res.render('index');
});

router.post("/workshop", scrap.getAddonList);

// Workshop Route
router.get("/workshop");

// Module Export
module.exports = router;