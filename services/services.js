const api = require("../config/api");

async function getServices() {
  const { data } = await api.get('/items/services')
  return data
}

module.exports = {
  getServices
}
