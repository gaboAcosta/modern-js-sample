
const Sequelize = require('sequelize')
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const modelName = 'User'
  const User = sequelize.define(modelName, {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});

  User.validatePassword = function(password) {
    return bcrypt.compare(password, this.password)
  }
  User.associate = function(){}

  return User
}
