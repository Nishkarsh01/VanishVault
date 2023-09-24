const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/authMiddleware');
const {createNote, readNote, fetchNotes} = require('../controllers/noteController')

router.post('/create', protect, createNote)
    .get('/read/:noteId', protect, readNote)
    .get('/all', protect, fetchNotes);

module.exports = router;