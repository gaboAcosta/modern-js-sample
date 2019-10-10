
const sinon = require('sinon')
const UserService = require('./user.service')
const Lab = require('@hapi/lab')
const { describe, it } = exports.lab = Lab.script();
const { expect } = require('@hapi/code')

describe('UserService', () => {
  describe('constructor', function(){
    it('Should throw an error if no user model is found', function(){
      try {
        const SUT = new UserService()
      } catch (ex) {
        expect(ex).to.exist()
      }
    })
  })
  describe('create', function(){
    it('Should create a user with the given params', async () => {
      const userModelStub = {
        create: sinon.stub()
      }
      const mockUserToCreate = {
        name: 'Name',
        email: 'e@mail.com',
        password: 'asd'
      }
      const mockUserCreated = {
        dataValues: {
          id: 1,
          ...mockUserToCreate
        }
      }
      userModelStub.create.returns(mockUserCreated)
      const SUT = new UserService(userModelStub)
      const createdUser = await SUT.create(mockUserToCreate)
      expect(userModelStub.create.calledWith(mockUserToCreate)).to.equal(true)
      expect(createdUser).to.not.equal(mockUserCreated)
    })
    it('Should return the actual model if raw is set to false', async () => {
      const userModelStub = {
        create: sinon.stub()
      }
      const mockUserToCreate = {
        name: 'Name',
        email: 'e@mail.com',
        password: 'asd'
      }
      const mockUserCreated = {
        dataValues: {
          id: 1,
          ...mockUserToCreate
        }
      }
      userModelStub.create.returns(mockUserCreated)
      const SUT = new UserService(userModelStub)
      const createdUser = await SUT.create(mockUserToCreate, false)
      expect(userModelStub.create.calledWith(mockUserToCreate)).to.equal(true)
      expect(createdUser).to.equal(mockUserCreated)
    })
  })
  describe('get', function(){
    it('Should be able to get an user with a query object', async function(){
      const userModelStub = {
        findOne: sinon.stub()
      }
      const mockUserToGet = {
        id: 1,
        name: 'Name',
        email: 'e@mail.com',
        password: 'asd'
      }
      const mockQueryObject = {
        id: 1
      }
      const raw = false
      userModelStub.findOne.returns(mockUserToGet)
      const SUT = new UserService(userModelStub)
      const foundUser = await SUT.get(mockQueryObject, raw)
      expect(userModelStub.findOne.calledWith({ where: mockQueryObject, raw })).to.equal(true)
      expect(foundUser).to.equal(mockUserToGet)
    })
    it('Should throw a Boom.notFound error if no user is returned', async function(){
      const userModelStub = {
        findOne: sinon.stub()
      }
      const mockQueryObject = {
        id: 1
      }
      const raw = false
      userModelStub.findOne.returns(undefined)
      const SUT = new UserService(userModelStub)
      let error
      try {
        const foundUser = await SUT.get(mockQueryObject, raw)
      } catch (ex) {
        error = ex
      }
      const { output: { statusCode }} = error
      expect(userModelStub.findOne.calledWith({ where: mockQueryObject, raw })).to.equal(true)
      expect(error).to.not.equal(undefined)
      expect(error.isBoom).to.equal(true)
      expect(statusCode).to.equal(404)
    })
  })
  describe('list', function(){
    it('should call the findAll with raw params', async function(){
      const userModelStub = {
        findAll: sinon.stub()
      }
      const mockUserToGet = {
        id: 1,
        name: 'Name',
        email: 'e@mail.com',
        password: 'asd'
      }
      const mockQueryObject = {
        id: 1
      }
      const raw = false
      userModelStub.findAll.returns([mockUserToGet])
      const SUT = new UserService(userModelStub)
      const foundUser = await SUT.list(raw)
      expect(userModelStub.findAll.calledWith({ raw })).to.equal(true)
      expect(foundUser).to.equal([mockUserToGet])
    })
  })
  describe('update', function(){
    it('Should call update with an ID and a payload to update', async function(){
      const userModelStub = {
        findOne: sinon.stub()
      }
      const id = 1
      const mockUserToGet = {
        id,
        name: 'Name',
        email: 'e@mail.com',
        password: 'asd',
        update: sinon.stub(),
        toJSON: sinon.stub()
      }
      const mockPayloadToUpdate = {
        name: 'New Name',
        password: 'qwe'
      }
      const mockQueryObject = {
        id
      }
      const raw = false
      userModelStub.findOne.returns(mockUserToGet)
      mockUserToGet.update.returns(mockUserToGet)
      mockUserToGet.toJSON.returns(mockUserToGet)
      const SUT = new UserService(userModelStub)
      const updatedUser = await SUT.update(id, mockPayloadToUpdate)
      expect(userModelStub.findOne.calledWith({ where: mockQueryObject, raw })).to.equal(true)
      expect(mockUserToGet.update.calledWith(mockPayloadToUpdate)).to.equal(true)
      expect(updatedUser).to.equal(mockUserToGet)
    })
  })
  describe('delete', function(){
    it('should call destroy in the user model using a query', async function(){
      const userModelStub = {
        destroy: sinon.stub()
      }
      const mockResult = 1
      const mockQuery = {
        id: 1
      }
      userModelStub.destroy.returns(mockResult)
      const SUT = new UserService(userModelStub)
      const result = await SUT.delete(mockQuery)
      expect(userModelStub.destroy.calledWith({ where: mockQuery })).to.equal(true)
      expect(result).to.equal(mockResult)
    })
  })
})