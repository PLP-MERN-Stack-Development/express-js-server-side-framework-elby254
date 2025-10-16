// middleware/logger.js
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} at ${new Date().toLocaleString()}`);
  next();
};

module.exports = logger;
