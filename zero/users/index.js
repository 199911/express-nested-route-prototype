var express = require('express');
var router = express.Router();

router.use('/users', (req, res, next) => {
  console.log('I am user middleware');
  next();
});

router
  .get('/users/:userName', function (req, res) {
    const { userName } = req.params;
    res.send(`POC zero: I am user "${userName}"`);
  });

module.exports = router;
