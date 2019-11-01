
const Joi = require('joi')
const Boom = require('boom')
const UserServiceFactory = require('./user.service.factory')
const { updateUserSchema, responseUserSchema } = require('./user.schema')

const userUpdateRoute = {
  name: 'userUpdateRoute',
  version: '0.0.1',
  dependencies: ['PostgresPlugin'],
  register: function(server) {
    const factory = new UserServiceFactory(server)
    const service = factory.getService()
    server.route({
      method: 'PUT',
      path: '/api/v1/users/{id}',
      handler: async (request) => {
        const {
          params: { id },
          payload
        } = request
        return await service.update(id, payload)
      },
      config: {
        tags: ['api'],
        validate: {
          params: {
            id: Joi.number().required()
          },
          payload: updateUserSchema
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

module.exports = userUpdateRoute