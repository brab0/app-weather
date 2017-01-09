'use strict';

module.exports = function(app) {
  var express = require('express');
  var router = express.Router();

  // carrega controller
  var weather = require('../controllers/weather');

  // rota genérica padrão
  app.use("/weather", router);

  // rota para retornar previsão a partir da latitude e longitude
  router.get('/:lat/:lng', weather.get);
}
