var express = require('express');
var router = express.Router();

router.use('/users/:userName/items', (req, res, next) => {
  console.log('I am item middleware');
  next();
});

router
  .get('/users/:userName/items/:itemName', function (req, res) {
    const { userName, itemName } = req.params;
    res.send(`POC zero: I am item "${itemName}" of user "${userName}"`);
  });

module.exports = router;
