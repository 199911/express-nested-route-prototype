var express = require('express');
var router = express.Router();

var { userMiddleware, petMiddleware } = require('../middlewares.js');

router
  .route('/users/:userName/pets/:petName')
  .all(userMiddleware)
  .all(petMiddleware)
  .get(function (req, res) {
    const { userName, petName } = req.params;
    res.send(`POC zero: I am pet "${petName}" of user "${userName}"`);
  });

module.exports = router;
