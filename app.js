// app.js
const express = require('express');
const app = express();
const db = require('./database/db');
const quizRoutes = require('./routes/quizRoutes');
const cors = require('cors');
const dotenv=require("dotenv")

dotenv.config();


app.use(cors());

const PORT = process.env.PORT || 3001;



db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api', quizRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
