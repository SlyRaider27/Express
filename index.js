var express = require('express');
var app = express();
var path = require('path');

app.get('/aboutme.html', function (req, res) {
  res.sendFile(path.join(__dirname + "/aboutme.html"));
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
})

app.get('/index.html', function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
})


app.listen(3000);