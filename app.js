const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv").config()
const app = express();
app.use(express.json());
app.use(cors())
const MONGO_URI = process.env.MONGO_URI;
const port = process.env.PORT
const route = require('./src/routes/routes');
app.use('/', route);

const mongoose = require('mongoose');
mongoose.connect(MONGO_URI).then((result) => {
    console.log('mongoDB connected');
}).catch((err) => {
    console.log(err);
});

app.listen(port, () => console.log('listening on port 5000'));