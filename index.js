const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5001

var CoinMarketCap = require("node-coinmarketcap");
exports.index = function(req, res) {
    // send moment to your ejs
    res.render('index', { CoinMarketCap: CoinMarketCap });
}


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/Karthik', (req, res) => res.render('pages/Karthik'))
  .get('/nedspage', (req, res) => res.render('pages/nedspage'))
  .get('/al-bio', (req, res) => res.render('pages/al-bio', {title:'Altin\'s Bio'}))
  .get('/paulspage', (req, res) => res.render('pages/paulspage'))
  .get('/newstest', (req, res) => res.render('pages/newstest'))
  .get('/serhiispage', (req, res) => res.render('pages/serhiispage'))
  .get('/main', (req, res) => res.render('pages/main'))
  .get('/calculator', (req, res) => res.render('pages/calculator'))
  .get('/news', (req, res) => res.render('pages/news'))
  .get('/database', (req, res) => res.render('pages/database'))
  .get('/game', (req, res) => res.render('pages/game'))
  .get('/scrolling-bar', (req, res) => res.render('pages/scrolling-bar'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
