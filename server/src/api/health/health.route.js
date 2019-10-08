
const healthRoute = {
  name: 'healthRoute',
  version: '0.0.1',
  register: async (server, options) => {
    server.route({
      method: 'GET',
      path: '/',
      handler: function() {
        return 'Hello World'
      }
    })
  }
}

module.exports = healthRoute
