const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use('/user', userRoutes);
app.use('/note', noteRoutes);

connectDB();

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Connected to PORT ${PORT}`));
