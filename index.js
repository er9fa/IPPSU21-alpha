const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5001
const rp = require('request-promise');
const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  qs: {
    'start': '1',
    'limit': '5000',
    'convert': 'USD'
  },
  headers: {
    'X-CMC_PRO_API_KEY': 'ccce157c-1125-4a00-94a6-2c88bb6b5a6b'
  },
  json: true,
  gzip: true
};

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
  .get('/testcoin', (req, res) => {
    rp(requestOptions).then(response => {
      console.log('API call response:', response);
      res.status(200).send(response);
    }).catch((err) => {
      console.log('API call error:', err.message);
      res.status(500).send({error: err.message});
    });
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
