const express = require('express');
const geminiController = require('../controllers/gemini');

const router = express.Router();

router.post('/generate', geminiController.generate);

router.post('/chat', geminiController.chat);

module.exports = router;
