
function deleteFromTable (queryInterface, tableName, where={}) {
  return queryInterface.bulkDelete(tableName, where)
}

module.exports = {
  deleteFromTable
}