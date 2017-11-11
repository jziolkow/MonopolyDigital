var express = require('express'),
app = express(),
port = process.env.PORT || 3000;

app.listen(port);

var routes = require('./api/routes/gameRoute'); //importing route

routes(app); //register the route

console.log('Monopoly API server started on: ' + port);