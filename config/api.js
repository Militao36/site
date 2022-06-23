const axios = require('axios').default

const URL = process.env.URL_BACKEND || "http://localhost:8055"

const api = axios.create({
  baseURL: URL
})

module.exports = api