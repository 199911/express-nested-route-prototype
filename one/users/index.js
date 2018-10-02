var express = require('express');
var router = express.Router();

router
  .get('/users/:userName', function (req, res) {
    const { userName } = req.params;
    res.send(`POC 1: I am user "${userName}"`);
  });

module.exports = router;