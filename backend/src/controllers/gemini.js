
const geminiService = require('../services/gemini');

/**
 * Controller for text generation.
 * @param {object} req - The Express request object.
 * @param {object} res - The Express response object.
 */
const generate = async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ message: 'Prompt is required' });
        }

        const text = await geminiService.generateText(prompt);
        res.status(200).json({ response: text });
    } catch (error) {
        // Centralized error handling. We log the error for debugging
        // and send a generic error message to the client.
        console.error('Error in text generation:', error);
        res.status(500).json({ message: 'Failed to generate text' });
    }
};

/**
 * Controller for multi-turn chat.
 * @param {object} req - The Express request object.
 * @param {object} res - The Express response object.
 */
const chat = async (req, res) => {
    try {
        const { history, message } = req.body;

        if (!message) {
            return res.status(400).json({ message: 'Message is required' });
        }

        const chatHistory = history || [];

        const text = await geminiService.startChat(chatHistory, message);
        res.status(200).json({ response: text });
    } catch (error) {
        console.error('Error in chat:', error);
        res.status(500).json({ message: 'Failed to get chat response' });
    }
};

module.exports = {
    generate,
    chat,
};
