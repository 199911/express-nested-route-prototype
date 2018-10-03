const createUserRouter = require('./user.route.js');
const createItemRouter = require('./item.route.js');
const createPetRouter = require('./pet.route.js');


const withUserRouter = (router, { userMiddleware }) => {
  const userRouter = createUserRouter({ userMiddleware });
  router.use('/', userRouter);
  return router;
}
const withItemRouter = (router, { userMiddleware, itemMiddleware }) => {
  const itemRouter = createItemRouter({ userMiddleware, itemMiddleware });
  router.use('/', itemRouter);
  return router;
}
const withPetRouter = (router, { userMiddleware, petMiddleware }) => {
  const petRouter = createPetRouter({ userMiddleware, petMiddleware });
  router.use('/', petRouter);
  return router;
}

module.exports = {
  withUserRouter,
  withItemRouter,
  withPetRouter,
}
