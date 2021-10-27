const express = require('express');
const { signupUser } = require('../controllers/authController');


const router = express.Router();

router.post('/signup', signupUser)

module.exports = router;