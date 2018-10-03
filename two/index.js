const { createApp } = require('./server/index.js');
const MiddlewareFactory = require('./server/middlewares/MiddlewareFactory.js');
const { withGlobalMiddleware } = require('./server/middlewares/index.js');
const { withUserRouter, withItemRouter, withPetRouter } = require('./server/routes/index.js');
const middlewareFactory = new MiddlewareFactory();

const main = () => {

  globalMiddleware = middlewareFactory.createGlobalMiddleware();
  userMiddleware = middlewareFactory.createUserMiddleware();
  itemMiddleware = middlewareFactory.createItemMiddleware();
  petMiddleware = middlewareFactory.createPetMiddleware();


  const app = createApp();

  withGlobalMiddleware(app, { globalMiddleware });

  withUserRouter(app, { userMiddleware });
  withItemRouter(app, { userMiddleware, itemMiddleware });
  withPetRouter(app, { userMiddleware, petMiddleware });

  app.listen(3000);
};
main();
