const express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello!');
});

const routes = require('./route/routes');
routes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);
