const api = require("../config/api");

async function getInfos() {
  const { data } = await api.get('/items/info')
  return data
}

module.exports = {
  getInfos
}
