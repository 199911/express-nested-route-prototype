var express = require('express');
var app = express();

app
  .get('/', function (req, res) {
    res.send('POC 0: I am index.')
  })
  .get('/users/:userName', function (req, res) {
    const { userName } = req.params;
    res.send(`POC 0: I am user "${userName}"`);
  })
  .get('/users/:userName/items/:itemName', function (req, res) {
    const { userName, itemName } = req.params;
    res.send(`POC 0: I am item "${itemName}" of user "${userName}"`);
  });

app.listen(3000);
