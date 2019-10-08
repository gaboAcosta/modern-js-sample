
class UserService {
  constructor(userModel){
    if(!userModel) throw 'Missing User Model'
    this.userModel = userModel
  }
  createUser(userData){
    return this.userModel.create(userData)
  }
}

module.exports = UserService