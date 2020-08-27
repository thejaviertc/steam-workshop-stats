// Global Dependencies
const express = require('express');
const router = express.Router();

// Local Dependencies
const scrap = require("../controllers/scrap");

// Index
router.get('/', (req, res) => {
    res.render('index');
});

router.post("/workshop", scrap.getInfo);

// Workshop
router.get("/workshop");

module.exports = router;