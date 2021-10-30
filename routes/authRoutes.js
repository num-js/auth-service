const express = require('express');
const { signupUser, signinUser, testProtected, testUnProtected } = require('../controllers/authController');
const { authMiddleware } = require('../middlewares/authMiddleware');


const router = express.Router();

router.post('/signup', signupUser);
router.post('/signin', signinUser);

//UnProtected Route
router.get('/test-unprotected', testUnProtected);

//Protected Route
router.get('/test-protected', authMiddleware, testProtected);


module.exports = router;