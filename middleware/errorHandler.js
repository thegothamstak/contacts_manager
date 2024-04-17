const { constants } = require('../constants')

const errorHandler = (error, req, res, next) => {
  const status = res.statusCode ? res.statusCode : 500
  switch (status) {
    case constants.VALIDATION_ERROR:
      res.json({ title: 'validation failed', status, message: error.message, stackTrace: error.stack })
      break
    case constants.NOT_FOUND:
      res.json({ title: 'not found', status, message: error.message, stackTrace: error.stack })
      break
    case constants.UNAUTHORIZED:
      res.json({ title: 'unauthorized', status, message: error.message, stackTrace: error.stack })
      break
    case constants.FORBIDDEN:
      res.json({ title: 'forbidden', status, message: error.message, stackTrace: error.stack })
      break
    case constants.SERVER_ERROR:
      res.json({ title: 'server error', status, message: error.message, stackTrace: error.stack })
      break
    default:
      console.log('no error')
      break
  }
}

module.exports = errorHandler
