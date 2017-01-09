// carrega expressJs
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.use('/',  express.static(__dirname));

// manipula Access Control para que qualquer rota acessada
// permita GETs, POSTs e OPTIONS
app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  next();
});

// bodyParser como helper de parametros para utilizar json
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

// carrega roteador principal
require('./routers/weather')(app);

// levanta o servidor na porta 3000
app.listen(3000, function() {
  console.log('Server Proxy at 3000!');
});
