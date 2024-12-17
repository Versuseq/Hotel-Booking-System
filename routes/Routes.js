const express = require('express');
const router = express.Router();

const registerRoute = require('./register');
const homeRoute = require('./index');

router.get('/', homeRoute);
router.use('/register', registerRoute);

module.exports = router;