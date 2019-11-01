
const Boom = require('boom')
const UserServiceFactory = require('./user.service.factory')
const { createUserSchema, responseUserSchema } = require('./user.schema')

const userCreateRoute = {
  name: 'userCreateRoute',
  version: '0.0.1',
  dependencies: ['PostgresPlugin'],
  register: function(server) {
    const factory = new UserServiceFactory(server)
    const service = factory.getService()
    server.route({
      method: 'POST',
      path: '/api/v1/users',
      handler: async (request) => {
        const {
          name,
          email,
          password
        } = request.payload
        return await service.create({ name, email, password })
      },
      config: {
        tags: ['api'],
        validate: {
          payload: createUserSchema
        },
        response: {
          modify: true,
          options: {
            stripUnknown: true,
          },
          schema: responseUserSchema
        },
      },
    })
  }
}

module.exports = userCreateRoute