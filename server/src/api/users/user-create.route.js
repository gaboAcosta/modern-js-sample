
const Joi = require('joi')
const Boom = require('boom')
const UserServiceFactory = require('./user.service.factory')

const userCreateRoute = {
  name: 'userCreateRoute',
  version: '0.0.1',
  dependencies: ['PostgresPlugin'],
  register: function(server) {
    const factory = new UserServiceFactory(server)
    const service = factory.getService()
    server.route({
      method: 'POST',
      path: '/v1/users',
      handler: async (request) => {
        const {
          name,
          email,
          password
        } = request.payload
        try {
          const user = await service.createUser({ name, email, password })
          return user.dataValues
        } catch (ex) {
          return Boom.internal(ex)
        }
      },
      options: {
        validate: {
          payload: {
            name: Joi.string().allow('').required(),
            email: Joi.string().allow('').required(),
            password: Joi.string().allow('').required()
          }
        },
      },
    })
  }
}

module.exports = userCreateRoute