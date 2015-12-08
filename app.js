'use strict';

const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// Get routes for service.
const router = require('./routes/index');
const config = require('./config/index');

// Create express app instance.
const app = express();

// Set express server configuration.
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Configure service routes.
app.use('/', router);

// Catch 404s and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Page Not Found');
  err.status = 404;

  next(err);
});

// Error handler for bad request, JSON parsing failed.
app.use(function(err, req, res, next) {
  if (err.status === 400) {
    err.message = 'Could not decode request: JSON parsing failed';
  }
  res.status(err.status || 500);
  res.json({
    'error': err.message,
  });
});

// Start server.
app.listen(config.port);
