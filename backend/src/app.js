const express = require('express');
const logger = require('morgan');

// Include routers
const helloWorldRouter = require('./routes/hello-world');

// Create the express app
const app = express();

// Packages
app.use(logger('dev'));

// Routes
app.use('/api/helloWorld', helloWorldRouter);

module.exports = app;
