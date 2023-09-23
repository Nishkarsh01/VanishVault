const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/authMiddleware')
const {registerUser, authUser, allUsers} = require('../controllers/userController')

router.post('/register', registerUser)
    .post('/login', authUser)
    .get('/:search',protect, allUsers);

module.exports = router;