var express = require('express');
var app = express();

var users = require('./users/index.js');
var items = require('./items/index.js');

app
  .get('/', function (req, res) {
    res.send('POC 1: I am index.')
  });

app.use(users);
app.use(items);

app.listen(3000);