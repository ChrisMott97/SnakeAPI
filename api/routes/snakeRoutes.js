'use strict';
module.exports = function(app) {
  var snake = require('../controllers/snakeController');


  // snake Routes
  app.route('/snakes')
    .get(snake.list_all_snakes)
    .post(snake.create_a_snake);


  app.route('/snakes/:snakeId')
    .get(snake.read_a_snake)
    .put(snake.update_a_snake)
    .delete(snake.delete_a_snake);
};