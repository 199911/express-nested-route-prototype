var express = require('express');
var app = express();

var users = require('./users/index.js');

app.use((req, res, next) => {
  console.log('I am global middleware');
  next();
});

app
  .get('/', function (req, res) {
    res.send('POC one: I am index.')
  });

app.use('/users', users);

app.listen(3000);
