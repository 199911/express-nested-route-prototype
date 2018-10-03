var express = require('express');

const createApp = () => {
  const app = express();

  // We may put some must-have non-business logic middleware set up here

  return app;
};

module.exports = { createApp };

