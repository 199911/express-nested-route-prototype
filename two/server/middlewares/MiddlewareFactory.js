class MiddlewareFactory {

  createGlobalMiddleware() {
    return (req, res, next) => {
      console.log('POC two: I am global middleware');
      next();
    };
  }

  createUserMiddleware() {
    return (req, res, next) => {
      console.log('POC two: I am user middleware');
      next();
    };
  }

  createItemMiddleware() {
    return (req, res, next) => {
      console.log('POC two: I am item middleware');
      next();
    };
  }

  createPetMiddleware() {
    return (req, res, next) => {
      console.log('POC two: I am pet middleware');
      next();
    };
  }

}

module.exports = MiddlewareFactory;
