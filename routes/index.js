const express = require('express');
const router = express.Router();
const ContentManager = require('../models/ContentManager');

const content = new ContentManager()
.setContent("home")
.setTitle("HomePage");

router.use((req,res) => {
    res.render("layouts/index", content)
})

module.exports = router;