var express = require('express');
var router = express.Router();

router
  .get('/users/:userName/items/:itemName', function (req, res) {
    const { userName, itemName } = req.params;
    res.send(`POC 1: I am item "${itemName}" of user "${userName}"`);
  });

module.exports = router;
