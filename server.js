const express = require('express')
const cors = require('cors');
const path = require('path');
const { getServices } = require('./services/services');
const { getInfos } = require('./services/info');

const app = express()

app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', async (req, res) => {
  const [services, info] = await Promise.all([
    getServices(),
    getInfos()
  ])

  res.render('index', {
    services: services.data || [],
    info: info.data[0] || {}
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.info(`http://localhost:${PORT}`))
