
const bcrypt = require('bcrypt')

function encrypt (password) {
  return bcrypt.hashSync(password, 10)
}

function compare (given, stored) {
  return bcrypt.compareSync(given, stored)
}

module.exports = {
  encrypt
}