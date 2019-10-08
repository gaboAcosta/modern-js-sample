
const config = {
  db: require('./db.config')
}

module.exports = {
  name: 'AppConfigs',
  version: '0.0.1',
  register: (server) => {
    server.decorate('server', 'config', config)
  }
}