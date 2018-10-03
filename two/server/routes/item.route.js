var express = require('express');

const createRouter = ({ userMiddleware, itemMiddleware }) => {
  const router = express.Router();
  router
    .route('/users/:userName/items/:itemName')
    .all(userMiddleware)
    .all(itemMiddleware)
    .get(function (req, res) {
      const { userName, itemName } = req.params;
      res.send(`POC zero: I am item "${itemName}" of user "${userName}"`);
    });
  return router;
};

module.exports = createRouter;
