const Sequelize = require('sequelize')
const { Client } = require('pg');
const config = require('../setup/db.config')

function getConnection (config) {
    const client = new Client(config)
    return client.connect().then(()=> client)
}

async function createDB() {
    const dbName = config.DB_NAME
    const connectionConfig = {
        database: 'postgres',
        user: config.DB_USER,
        host: config.DB_HOST
    }
    console.log('Getting connection for:', connectionConfig)
    const client = await getConnection(connectionConfig)

    const query = `CREATE DATABASE ${dbName}`
    console.log('Got Client, querying the db with:', query)
    try {
        await client.query(query)    
        console.log('DB Creation Successful!')
        process.exit()
    } catch (ex) {
        console.log('DB Creation failed with error', ex)
        process.exit(ex)   
    }
}

console.log('calling create DB')
createDB()