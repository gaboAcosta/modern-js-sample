const Joi = require('joi')

const clientRoute = {
  name: 'clientRoute',
  version: '0.0.1',
  register: async (server, options) => {
    server.route({
      method: 'GET',
      path: '/',
      handler: function(request, h) {
        return h.view('index')
      }
    })
  }
}

module.exports = clientRoute
