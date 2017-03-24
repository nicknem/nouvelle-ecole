const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.send('Bienvenue sur Nouvelle École')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
