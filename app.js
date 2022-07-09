const express = require('express');
const app = express();

const userRoute = require('./routers/userRoute');


app.use(express.json());
//Routes which should handle request

app.use('/user', userRoute);




module.exports = app;