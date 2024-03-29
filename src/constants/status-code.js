const statusCode = {
    //success
    SUCCESS: 200,
    CREATED: 201,
    SUCCESS_NO_CONTENT: 204,
    // error
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    VALIDATION_ERROR: 422,
    CONFLICT: 409,
    FAILED: 424,
    INTERNAL_SERVER_ERROR:500
  }
  
  module.exports = statusCode;