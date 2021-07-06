const urlbase = `https://api.coingecko.com/api/v3/`
async function getExchangeRates(){
  const response = await fetchExchangeRates()
  return formatExchangeCoin(response)
}
async function fetchExchangeRates() {
    // Begin creating the query to send to the CoinGecko API
    const url = new URL(urlbase + 'exchange_rates')
    // If an array of coin IDs has been provided, add it to the query
    // If no coin IDs are specified, then a list of popular coins ranked by market cap in descending order are returned instead
    const response = await fetch(url).then(r => r.json())
        .then(data => {
            console.log("Retrieved exchange rates", data)
            return data["rates"]
        })
    // Return the coins as a JSON object
    return response
}
function formatExchangeCoin(response) {
    console.log("formatExchangeCoin", response)
    let coins = []
    for (const [key, value] of Object.entries(response)) {
  console.log(key);
  console.log(value);
  const name = value.name
  const factor = value.value
  const tickerSymbol = key.toUpperCase()

  coins.push({
      "name" : name,
      "tickerSymbol" : tickerSymbol,
      "exchangeRate" : factor,
  })
}
    return coins
}

function convertExchangeCoinsToDropdownOptions(exchangeCoins) {
  const formattedCoins = []
  // Convert the retrieved coins into the format the dropdown menu library requires to display them (see Select2 library for more details)
  console.log("exchangeCoins", exchangeCoins)
  let index = 0;
  for (const [key, value] of Object.entries(exchangeCoins)) {
    coinFormatted = {
        id: index,
        text: value.tickerSymbol + " " + value.name
    }
    formattedCoins.push(coinFormatted)
    index += 1
  }
  console.log(formattedCoins)
  return formattedCoins
}
