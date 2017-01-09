var httpRequest = require('request');

exports.get = function(req, res) {
  var weatherUrl = "https://api.darksky.net/forecast/9fc6adb967f86ee8b7abbbf5a05795af/" + req.params.lat + "," + req.params.lng + "?lang=pt";

  // requisita darksky api para obter previsão do tempo a partir da latitude e longitude
  httpRequest(weatherUrl, function(error, response, body) {
    res.status(200).send(JSON.parse(body));
  });
}
