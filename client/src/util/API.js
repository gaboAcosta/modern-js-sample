
const agent = require('superagent');

export default class APIClient {
  static async getUsers(){
    const response = await agent.get('/api/v1/users')
    return response.body
  }
}