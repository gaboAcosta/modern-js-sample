const Joi = require('joi')

const healthRoute = {
  name: 'healthRoute',
  version: '0.0.1',
  register: async (server, options) => {
    server.route({
      method: 'GET',
      path: '/',
      handler: function() {
        return 'Hello World'
      },
      config: {
        tags: ['api'],
        response: {
          modify: true,
          options: {
            stripUnknown: true,
          },
          schema: Joi.string().required()
        },
      }
    })
  }
}

module.exports = healthRoute
