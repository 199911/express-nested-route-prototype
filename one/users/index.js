var express = require('express');
var router = express.Router();

var items = require('./items/index.js');
var pets = require('./pets/index.js');

router.use((req, res, next) => {
  console.log('I am user middleware');
  next();
});

router
  .get('/:userName', function (req, res) {
    const { userName } = req.params;
    res.send(`POC one: I am user "${userName}"`);
  });
router.use('/:userName/items', items);
router.use('/:userName/pets', pets);

module.exports = router;
