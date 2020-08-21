// Global Dependencies
const express = require('express');
const router = express.Router();

// Local Dependencies
const { scrap } = require("../controllers/scrap");

// Index
router.get("/", scrap);

module.exports = router;