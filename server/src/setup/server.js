const Hapi = require('@hapi/hapi')
const Inert = require('@hapi/inert')
const Vision = require('@hapi/vision')
const HapiSwaggerPlugin = require('./swagger')
const { getRoutes } = require('./routes')
require('./db')

const server = Hapi.server({
  port: 3000,
  host: '0.0.0.0'
})

async function loadPlugins(server) {
  const routes = getRoutes()
  const appPlugins = [
    {
      plugin: require('hapi-pino'),
      options: {
        level: 'info',
        logEvents: false,
        prettyPrint: true,
        mergeHapiLogData: true
      }
    },
    Inert,
    Vision,
    HapiSwaggerPlugin,
    require('./app.config'),
    require('./db'),
    require('./errorHandler')
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