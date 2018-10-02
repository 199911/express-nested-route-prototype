var express = require('express');
var router = express.Router();

var { userMiddleware } = require('../middlewares.js');

router
  .route('/users/:userName')
  .all(userMiddleware)
  .get(function (req, res) {
    const { userName } = req.params;
    res.send(`POC zero: I am user "${userName}"`);
  });

module.exports = router;
