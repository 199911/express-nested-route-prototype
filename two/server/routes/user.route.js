var express = require('express');

const createRouter = ({ userMiddleware }) => {
  const router = express.Router();
  router
    .route('/users/:userName')
    .all(userMiddleware)
    .get(function (req, res) {
      const { userName } = req.params;
      res.send(`POC zero: I am user "${userName}"`);
    });
  return router;
};

module.exports = createRouter;
