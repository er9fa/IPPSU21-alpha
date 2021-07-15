const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5001
const rp = require('request-promise');
const fetch = require('node-fetch')
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
  .get('/historical', (req, res) => res.render('pages/historical'))
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

  .get('/newsdata', (req, res) => {
    search_string = req.query.search_string;
    page_num = req.query.page_num;

    fetch(`https://newsapi.org/v2/everything?apiKey=a791d1a1c2674ac8914503c53d9a1e8b&language=en&q=${search_string}&page=${page_num}`)
    .catch(err => console.log(err))
    .then(r => r.json()).then(data => {
      console.log(data);
      res.header('Access-Control-Allow-Origin', '*');
      res.send(data);
    });
  })

  .get('/conversiondata', (req, res) => {
    currency = req.query.amount;
    dropdown1Symbol = req.query.symbol;
    dropdown2Symbol = req.query.convert;

    console.log("Currency" + currency)
    console.log("dropdown1Symbol" + dropdown1Symbol)
    console.log("dropdown2Symbol" + dropdown2Symbol)

     console.log(`https://pro-api.coinmarketcap.com/v1/tools/price-conversion?CMC_PRO_API_KEY=bc695b6b-f4b5-438b-9fab-88f108aead7f&amount=${currency}&symbol=${dropdown1Symbol}&convert=${dropdown2Symbol}`)
     fetch(`https://pro-api.coinmarketcap.com/v1/tools/price-conversion?CMC_PRO_API_KEY=bc695b6b-f4b5-438b-9fab-88f108aead7f&amount=${currency}&symbol=${dropdown1Symbol}&convert=${dropdown2Symbol}`)
     .catch(err => console.log(err))
     .then(r => r.json()).then(data => {
       console.log(data);
       res.header('Access-Control-Allow-Origin', '*');
       res.send(data);
     });
   })

  .get('/cm-get-crypto-currencies', (req, res) => {
    const baseUrlConvertHelper = "https://pro-api.coinmarketcap.com/v1/"
    let url = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`)
    let params = "?" + (new URLSearchParams(url.search.slice(1))).toString();

    let result = baseUrlConvertHelper + "cryptocurrency/map" + params

    fetch(result)
    .catch(err => console.log(err))
    .then(r => r.json()).then(data => {
      console.log("RESULT: " + result)
      console.log(data);
        res.header('Access-Control-Allow-Origin', '*');
        res.send(data);
      });
  })

  .get('/cm-get-fiat-currencies', (req, res) => {
    const baseUrlConvertHelper = "https://pro-api.coinmarketcap.com/v1/"
    let url = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`)
    let params = "?" + (new URLSearchParams(url.search.slice(1))).toString();

    let result = baseUrlConvertHelper + "fiat/map" + params

    fetch(result)
    .catch(err => console.log(err))
    .then(r => r.json()).then(data => {
      console.log("RESULT: " + result)
      console.log(data);
        res.header('Access-Control-Allow-Origin', '*');
        res.send(data);
      });
  })

  .get('/main', (req, res) => res.render('pages/main'))
  .get('/calculator', (req, res) => res.render('pages/calculator-altin'))
  .get('/calculator2', (req, res) => res.render('pages/calculator'))
  .get('/news', (req, res) => res.render('pages/news'))
  .get('/database', (req, res) => res.render('pages/database'))
  .get('/game', (req, res) => res.render('pages/game'))
  .get('/secret', (req, res) => res.render('pages/secret'))
  .get('/scrolling-bar', (req, res) => res.render('pages/scrolling-bar'))
  .get('/chart', (req, res) => res.render('pages/chart-coin'))
  .get('/about', (req, res) => res.render('pages/about'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
