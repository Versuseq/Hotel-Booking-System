const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const ContentManager = require('../models/ContentManager');

const content = new ContentManager()
.setContent("register")
.setTitle("Register");

router.get('/', (req,res) => {
    res.status(200).render("layouts/index", content);
})
router.post('/', authController.register);
module.exports = router;