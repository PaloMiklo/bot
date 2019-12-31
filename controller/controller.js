exports.smartWatch = function(req, res) {
  const bot = require('../bot.js');
  bot.then(data => res.status(200).send(data))
  .catch(err => res.status(404).send(`${err}`));
};
