var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Snake = require('./api/models/snakeModel'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://heroku_rd2gkwq4:gsb57pul3jd860rr08tsiaghol@ds159591.mlab.com:59591/heroku_rd2gkwq4'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/snakeRoutes');
routes(app);


app.listen(port);


console.log('snake RESTful API server started on: ' + port);
