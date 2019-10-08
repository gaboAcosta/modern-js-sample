
const config = require('./db.config')

module.exports = {
  development: {
    username: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    host: config.DB_HOST,
    dialect: config.DB_DIALECT,
    logging: true
  },
  test: {
    username: config.DB_USER,
    password: config.DB_PASSWORD,
    database: 'test',
    host: config.DB_HOST,
    dialect: config.DB_DIALECT,
    logging: true
  }
}