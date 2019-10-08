const Sequelize = require('sequelize');
const models = require('./models');
// Option 1: Passing parameters separately

const plugin = {
  name: 'PostgresPlugin',
  version: '0.0.1',
  dependencies: ['AppConfigs'],
  register: async (server) => {
    const { config } = server
    const {
      db: {
        DB_HOST,
        DB_USER,
        DB_NAME,
        DB_PASSWORD,
        DB_DIALECT
      },
    } = config

    const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
      host: DB_HOST,
      dialect: DB_DIALECT,
      pool: {
        max: 9,
        min: 0,
        idle: 10000
      }
    });
    try {
      await sequelize.authenticate()
      console.log('Connected to the db!')
    } catch (ex) {
      process.exit(1)
    }
    const appModels = models.getAllAppModels(sequelize)
    const db = {
      sequelize,
      models: appModels
    }
    server.decorate('server', 'db', db)
  }
}

module.exports = plugin