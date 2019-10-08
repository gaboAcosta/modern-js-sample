const { start } = require('./src/setup/server')

start()
  .then(() => {
    console.log('Server ready to receive calls')
  }).catch((error) => {
    console.log('Error starting the server!!', error)
})