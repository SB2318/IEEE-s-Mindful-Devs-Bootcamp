
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const authRoutes = require('./routes/auth');

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('API Is Working');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
