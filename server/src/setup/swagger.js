
const HapiSwagger = require('hapi-swagger');
const Pack = require('../../package');

const swaggerOptions = {
  info: {
    title: 'Modern JS App Docs',
    version: Pack.version,
  },
};

module.exports = {
  plugin: HapiSwagger,
  options: swaggerOptions
}