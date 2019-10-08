
class AbstractServiceFactory {
  constructor(server) {
    this._serviceConstructor = this.serviceConstructor(server)
  }
  serviceConstructor() {
    throw new Error('This is an abstract class, extend it to use it')
  }
  getService() {
    return this._serviceConstructor()
  }
}

module.exports = AbstractServiceFactory