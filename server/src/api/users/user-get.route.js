
const Joi = require('joi')
const Boom = require('boom')
const UserServiceFactory = require('./user.service.factory')
const { responseUserSchema } = require('./user.schema')

const userGetRoute = {
  name: 'userGetRoute',
  version: '0.0.1',
  dependencies: ['PostgresPlugin'],
  register: function(server) {
    const factory = new UserServiceFactory(server)
    const service = factory.getService()
    server.route({
      method: 'GET',
      path: '/api/v1/users/{id}',
      handler: async (request) => {
        const {
          id
        } = request.params
        return await service.get({ id })
      },
      config: {
        tags: ['api'],
        validate: {
          params: {
            id: Joi.number().required()
          }
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

module.exports = userGetRoute