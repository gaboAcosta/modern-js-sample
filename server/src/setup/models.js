
const glob = require('glob')
const Sequelize = require('sequelize')

function getAllAppModels (sequelize) {
  const models = {}
  glob.sync('../db/models/*.js', { cwd: __dirname }).forEach((route) => {
    const model = require(route)(sequelize, Sequelize)
    const name = model.name
    models[name] = model
  })
  return models
}

module.exports = {
  getAllAppModels
}