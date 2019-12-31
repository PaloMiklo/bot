const express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  bodyParser = require('body-parser'),
  prefix = '/api/';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get(`${prefix}bot`, function(req, res) {
  const bot = require('./bot.js');
  bot.then(data => res.send(data)).catch(err => res.send('error'));
});

// const routes = require('./routes.js');
// routes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);
