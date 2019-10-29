
module.exports = {
  name: 'errorHandler',
  version: '0.0.1',
  register: (server) => {
    const preResponse = function (request, h) {
      const response = request.response
      if (!response.isBoom) {
        return h.continue;
      }

      const { statusCode } = response.output
      const stack = new Error().stack

      const parsedError = {
        path: request.path,
        headers: request.headers,
        payload: request.payload,
        responseMessage: response.message,
        responseStatusCode: statusCode,
        stackTrace: stack
      }

      server.log(['error'], '=== HANDLING ERROR RESPONSE ===')
      server.log(['error'], parsedError)

      return h.continue;
    }

    server.ext('onPreResponse', preResponse)
  }
}
