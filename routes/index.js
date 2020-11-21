// Global Dependencies
const express = require('express');
const router = express.Router();

// Controllers
require("../controllers/scrap")();

// Index Route
router.get('/', (req, res) => {
    res.render('index');
});

router.post("/workshop", (req, res) => {
    getAddonList(req, res);
});

// Workshop Route
router.get("/workshop");

// Module Export
module.exports = router;