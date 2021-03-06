const express = require('express');
const bodyParser = require("body-parser");
const app = express();
require('dotenv').config();

const testRoutes = require('./routes/test');
const userRoutes = require('./routes/user');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/test', testRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;