
const express = require('express');

const app = express();

//var PORT = process.env.PORT || 5000;

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
  });
  app.get('/hi', function (req, res) {
    res.sendfile(__dirname + '/index.html');
  });
console.log("Entered");