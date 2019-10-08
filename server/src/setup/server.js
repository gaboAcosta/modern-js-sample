const Hapi = require('@hapi/hapi')
const { getRoutes } = require('./routes')
require('./db')

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
})

async function loadPlugins(server) {
  const routes = getRoutes()
  const appPlugins = [
    require('./app.config'),
    require('./db')
  ]
  await server.register(appPlugins.concat(routes))
}

exports.isInit = false

exports.runInit = async () => {
  if(!this.isInit) {
    await loadPlugins(server)
    await server.initialize()
    this.isInit = true
  }
}

exports.init = async () => {
  await this.runInit()
  return server
}

exports.start = async () => {
  await this.runInit()
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
  return server
}