const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5001

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/nedspage', (req, res) => res.render('pages/nedspage'))
  .get('/serhiispage', (req, res) => res.render('pages/serhiispage'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
