
const Boom = require('boom')

class UserService {
  constructor(userModel){
    if(!userModel) throw 'Missing User Model'
    this.userModel = userModel
  }
  async create(userData, raw=true){
    const user = await this.userModel.create(userData)
    return raw ? user.dataValues : user
  }
  async get(where={}, raw=true){
    const user = await this.userModel.findOne({ where, raw })
    if(!user) throw Boom.notFound('User not found')
    return user
  }
  list(raw=true){
    return this.userModel.findAll({ raw })
  }
  async update(id, payload){
    const user = await this.get({ id }, false)

    await user.update(payload)
    return user.toJSON()
  }
  async delete (where) {
    const result = await this.userModel.destroy({ where })
    return result
  }

}

module.exports = UserService