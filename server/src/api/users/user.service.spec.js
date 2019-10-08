
const sinon = require('sinon')
const UserService = require('./user.service')
const Lab = require('@hapi/lab')
const { describe, it } = exports.lab = Lab.script();
const { expect } = require('@hapi/code')

describe('UserService', () => {
  it('Should throw an error if no user model is found', function(){
    try {
      const SUT = new UserService()
      //this expect should never be reached
      expect(true).to.equal(false)
    } catch (ex) {
      expect(ex).to.exist()
    }
  })
  it('Should create a user with the given params', async () => {
    const userModelStub = {
      create: sinon.stub()
    }
    const mockUserToCreate = {
      name: 'Name',
      email: 'e@mail.com',
      password: 'asd'
    }
    const SUT = new UserService(userModelStub)
    await SUT.createUser(mockUserToCreate)
    expect(userModelStub.create.calledWith(mockUserToCreate)).to.equal(true)
  })
})