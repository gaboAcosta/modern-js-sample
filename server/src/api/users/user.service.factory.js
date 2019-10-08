
// const userModel = require('./user.model')
const AbstractServiceFactory = require('../../common/AbstractServiceFactory')
const UserService = require('./user.service')

class UserServiceFactory extends AbstractServiceFactory {
  serviceConstructor(server){
    return function () {
      const { db } = server
      const userModel = db.models.User
      return new UserService(userModel)
    }
  }
}

module.exports = UserServiceFactory