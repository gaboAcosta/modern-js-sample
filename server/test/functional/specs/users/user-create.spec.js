
'use strict';

const Lab = require('@hapi/lab');
const { expect } = require('@hapi/code');
const { afterEach, beforeEach, describe, it } = exports.lab = Lab.script();
const { init } = require('../../../../src/setup/server');
const { deleteFromTable } = require('../../util/db')

describe('Users Tests', () => {
  let server;
  beforeEach(async () => {
    server = await init();
    const { db: { sequelize } } = server
    const queryInterface = await sequelize.getQueryInterface()
    await deleteFromTable(queryInterface, 'Users')
  });
  afterEach(async () => {
    await server.stop();
  });
  describe('User creation', () => {
    it('Should create a user with the right payload', async () => {
      const { db: { sequelize, models } } = server
      const email = 'test@test.com'
      const password =  'asd'
      const userToCreate = {
        name: 'Test',
        email,
        password
      }
      const res = await server.inject({
        method: 'POST',
        url: '/api/v1/users',
        payload: userToCreate
      });
      const users  = await models.User.findAll({ raw: true })
      expect(res.statusCode).to.equal(200);
      expect(users.length).to.equal(1);
      const [ user ] = users
      expect(user.name).to.equal(userToCreate.name)
      expect(user.email).to.equal(userToCreate.email)
    })
  })
});