var express = require('express');
var router = express.Router({ mergeParams: true});

router.use((req, res, next) => {
  console.log('I am item middleware');
  next();
});

router
  .get('/:itemName', function (req, res) {
    const { userName, itemName } = req.params;
    res.send(`POC one: I am item "${itemName}" of user "${userName}"`);
  });

module.exports = router;
