const express = require('express');
const router = express.Router();
const {registerUser, authUser} = require('../controllers/userController')

router.post('/register', registerUser)
    .post('/login', authUser);

module.exports = router;