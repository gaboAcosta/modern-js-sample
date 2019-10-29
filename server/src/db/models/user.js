
const Sequelize = require('sequelize')
const { encrypt, compare } = require('../../common/password')

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
      allowNull: false,
      set (value) {
        this.setDataValue('password', encrypt(value))
      }
    }
  }, {});

  User.validatePassword = function(password) {
    return compare(password, this.password)
  }
  User.associate = function(){}

  return User
}
