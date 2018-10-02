var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
  console.log('I am pet middleware');
  next();
});

router
  .get('/users/:userName/pets/:petName', function (req, res) {
    const { userName, petName } = req.params;
    res.send(`POC zero: I am pet "${petName}" of user "${userName}"`);
  });

module.exports = router;
