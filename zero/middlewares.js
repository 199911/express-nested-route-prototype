const userMiddleware = (req, res, next) => {
  console.log('I am user middleware');
  next();
}

const itemMiddleware = (req, res, next) => {
  console.log('I am item middleware');
  next();
}

const petMiddleware = (req, res, next) => {
  console.log('I am pet middleware');
  next();
}

module.exports = {
  userMiddleware,
  itemMiddleware,
  petMiddleware,
};
