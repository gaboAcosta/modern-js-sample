
const bcrypt = require('bcrypt')

function encrypt (password) {
  return bcrypt.hash(password, 10)
}

module.exports = {
  encrypt
}