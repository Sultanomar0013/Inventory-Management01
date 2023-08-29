const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const signupRouter = require('./routes/signupRouter');
const signinRouter = require('./routes/signinRouter'); 
const app = express();

app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }));

app.use('/api', signupRouter);

app.use('/api', signinRouter);

module.exports = app;
