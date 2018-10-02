var express = require('express');
var router = express.Router({ mergeParams: true});

router.use((req, res, next) => {
  console.log('I am pet middleware');
  next();
});

router
  .get('/:petName', function (req, res) {
    const { userName, petName } = req.params;
    res.send(`POC one: I am pet "${petName}" of user "${userName}"`);
  });

module.exports = router;
