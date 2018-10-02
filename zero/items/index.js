var express = require('express');
var router = express.Router();

var { userMiddleware, itemMiddleware } = require('../middlewares.js');

router
  .route('/users/:userName/items/:itemName')
  .all(userMiddleware)
  .all(itemMiddleware)
  .get(function (req, res) {
    const { userName, itemName } = req.params;
    res.send(`POC zero: I am item "${itemName}" of user "${userName}"`);
  });

module.exports = router;
