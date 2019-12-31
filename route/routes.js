'use strict';
const botController = require('../controller/controller.js'),
  prefix = '/api/';

module.exports = function(app) {
  app.route(`${prefix}bot`)
  .get(botController.smartWatch);
  
  // wrong route entered
  // app.use(function(req, res) {
  //   res.status(404).send({ url: req.originalUrl + ' not found' });
  // });
};
