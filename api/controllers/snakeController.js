'use strict';


var mongoose = require('mongoose'),
  Snake = mongoose.model('Snakes');

exports.list_all_snakes = function(req, res) {
  Snake.find({}, function(err, snake) {
    if (err)
      res.send(err);
    res.json(snake);
  }).sort('-score');
};




exports.create_a_snake = function(req, res) {
  var new_snake = new Snake(req.body);
  new_snake.save(function(err, snake) {
    if (err)
      res.send(err);
    res.json(snake);
  });
};


exports.read_a_snake = function(req, res) {
  Snake.findById(req.params.snakeId, function(err, snake) {
    if (err)
      res.send(err);
    res.json(snake);
  });
};


exports.update_a_snake = function(req, res) {
  Snake.findOneAndUpdate(req.params.snakeId, req.body, {new: true}, function(err, snake) {
    if (err)
      res.send(err);
    res.json(snake);
  });
};


exports.delete_a_snake = function(req, res) {


  Snake.remove({
    _id: req.params.snakeId
  }, function(err, snake) {
    if (err)
      res.send(err);
    res.json({ message: 'Snake successfully deleted' });
  });
};
