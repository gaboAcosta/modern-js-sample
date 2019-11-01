import { observable } from "mobx";
import APIClient from '../util/API'

export default class UsersList {
  @observable users
  constructor() {
    this.users = []
  }
  async fetchUsers () {
    console.log('Fetching users!')
    try {
      this.users = await APIClient.getUsers()
      console.log('Successfully fetched users', this.users)
    } catch {
      console.log('Error fetching users!')
    }
  }
}