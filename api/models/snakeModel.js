'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SnakeSchema = new Schema({
  name: {
    type: String,
    Required: 'Enter your name'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  score: {
      type: Number,
      Required: 'A score is required'
  },
  deathWalls: {
    type: Boolean,
    default: true
  },
  lengthIncrease: {
      type: Boolean,
      default: true
  },
  speedIncrease: {
      type: Boolean,
      default: true
  }
});

module.exports = mongoose.model('Snakes', SnakeSchema);