const withGlobalMiddleware = (app, { globalMiddleware }) => {
  app.use(globalMiddleware);
  return app;
}

module.exports = {
  withGlobalMiddleware
}
