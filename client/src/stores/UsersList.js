import { observable } from "mobx";
import APIClient from '../util/API'

export default class UsersList {
  @observable users
  constructor() {
    this.users = []
  }
  async fetchUsers () {
    this.users = await APIClient.getUsers()
  }
}