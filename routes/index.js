'use strict';

const express = require('express');
const Parser = require('../util/parser');

// Create router instance.
const router = express.Router();

// Test route to make sure everything is working!
router.get('/', function(req, res) {
  res.json({
    message: 'Hooray! Welcome to my web service!'
  });
});

// Handles post request to filter data.
router.post('/', function(req, res) {
  const parser = new Parser(req.body.payload);

  // Filter body by type and workflow.
  parser.filterBy('type', 'htv');
  parser.filterBy('workflow', 'completed');

  // Reduce fields.

  // Return filterd data.
  res.json({
    response: parser.getData(),
  });
});

module.exports = router;
