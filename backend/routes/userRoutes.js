const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/authMiddleware')

const {registerUser, authUser, allUsers,verifyUser} = require('../controllers/userController')

router.post('/register', registerUser)
    .post('/login', authUser)
    .get('/:search',protect, allUsers)
    .get('/verify/:token', verifyUser);


module.exports = router;