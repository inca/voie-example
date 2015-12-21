'use strict';

var express = require('express');
var http = require('http');

var app = express();

app.use(express.static('static'));

app.get('/*', function(req, res) {
  res.sendFile('static/index.html', {
    root: __dirname
  });
});

http.createServer(app).listen(process.env.PORT || 8080, function() {
  console.log('Visit http://localhost:8080 to access app.')
});
