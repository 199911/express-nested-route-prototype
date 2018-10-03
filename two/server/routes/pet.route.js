var express = require('express');

const createRouter = ({ userMiddleware, petMiddleware }) => {
  const router = express.Router();
  router
    .route('/users/:userName/pets/:petName')
    .all(userMiddleware)
    .all(petMiddleware)
    .get(function (req, res) {
      const { userName, petName } = req.params;
      res.send(`POC zero: I am pet "${petName}" of user "${userName}"`);
    });
  return router;
};

module.exports = createRouter;
