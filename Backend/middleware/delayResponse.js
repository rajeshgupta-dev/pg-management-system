
function delayResponse(req, res, next) {
  setTimeout(() => {
    next()
  }, 800)
};

module.exports = delayResponse