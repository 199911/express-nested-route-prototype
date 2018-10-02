var express = require('express');
var app = express();

var users = require('./users/index.js');
var items = require('./items/index.js');

app.use((req, res, next) => {
  console.log('I am global middleware');
  next();
});

app
  .get('/', function (req, res) {
    res.send('POC zero: I am index.')
  });

app.use(users);
app.use(items);

app.listen(3000);
