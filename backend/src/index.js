
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json());
const port = process.env.PORT || 3000;

const authRoutes = require('./routes/auth');
const geminiRoutes = require('./routes/gemini');

app.use('/auth', authRoutes);
app.use('/api/gemini', geminiRoutes);

app.get('/', (req, res) => {
    res.send('API Is Working');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
