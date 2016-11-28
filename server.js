const path = require('path')
const express = require('express')
const app = express()
const content = require('./data/content')

app.set('view engine', 'pug')

// Set views path
app.set('views', path.join(__dirname, 'components'))

// Expose publicly accesible assets dir
app.use('/components', express.static(path.join(__dirname, 'components')))
app.use('/bundle', express.static(path.join(__dirname, 'bundle')))
app.use('/content', express.static(path.join(__dirname, 'content')))

app.get('/', function (req, res) {
  res.render('app/index', content)
})

app.listen(5555, function () {
  console.log('Example app listening on port 5555!')
})
