
const Joi = require('joi')

const createUserSchema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
}).label('UserCreationPayload')

const updateUserSchema = Joi.object().keys({
  name: Joi.string().optional(),
  password: Joi.string().optional(),
}).label('UserUpdatePayload')

const responseUserSchema = Joi.object().keys({
  id: Joi.number().required(),
  name: Joi.string().required(),
  email: Joi.string().required(),
}).label('User')

const userListSchema = Joi.array().items(responseUserSchema).label('UserList')

module.exports = {
  createUserSchema,
  responseUserSchema,
  updateUserSchema,
  userListSchema
}