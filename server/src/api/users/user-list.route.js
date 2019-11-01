
const Boom = require('boom')
const UserServiceFactory = require('./user.service.factory')
const { userListSchema } = require('./user.schema')

const userList = {
  name: 'userList',
  version: '0.0.1',
  dependencies: ['PostgresPlugin'],
  register: function(server) {
    const factory = new UserServiceFactory(server)
    const service = factory.getService()
    server.route({
      method: 'GET',
      path: '/api/v1/users',
      handler: async (request) => {
        return await service.list()
      },
      config: {
        tags: ['api'],
        response: {
          modify: true,
          options: {
            stripUnknown: true,
          },
          schema: userListSchema
        },
      },
    })
  }
}

module.exports = userList