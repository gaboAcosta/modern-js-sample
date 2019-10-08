
const glob = require('glob')

exports.getRoutes = () => {
  return glob.sync('../api/**/*.route.js', { cwd: __dirname }).map((route) => {
    return require(route)
  })
}