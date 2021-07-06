// The base url for the CoinGecko API
const base = `https://api.coingecko.com/api/v3/`

/**
 * Gets the current value of a cryptocurrency in USD
 * @param {String} coinID The ID of a cryptocurrency from the CoinGecko API
 */
async function getValue(coinID) {
    coinID = coinID.toLowerCase()
    const coin = await getCoin(coinID)
    // Note: JS objects store only strings, so the price must first be converted to a number before adding decimal places
    return Number(coin.price)
}

/**
 * Gets the current value, market cap, and 24hr change for a cryptocurrency
 * @param {String} coinID The ID of a cryptocurrency to look up in the CoinGecko API
 */
async function getCoin(coinID) {
    coinID = coinID.toLowerCase()
    coin = (await getCoins([coinID]))[0] // The first coin in the response is the only coin, so return [0]
    return coin
}

/**
 * Gets the current value, market cap, and 24hr change for every cryptocurrency in an array
 * @param {Array} coinIDs An array of cryptocurrency ids from the CoinGecko API
 */
async function getCoins(coinIDs) {
    const response = await fetchCoins(coinIDs)
    return formatCoins(response)
}

/**
 * Gets a JSON object from a CoinGecko API coin/markets call
 * @param {Array} coinIDs 
 */
async function fetchCoins(coinIDs) {
    // Begin creating the query to send to the CoinGecko API
    const url = new URL(base + 'coins/markets')
    const params = {
        'vs_currency': 'usd',
        'price_change_percentage': '24h'
    }
    // If an array of coin IDs has been provided, add it to the query
    // If no coin IDs are specified, then a list of popular coins ranked by market cap in descending order are returned instead
    if (coinIDs) params["ids"] = coinIDs.join(",")

    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    const response = await fetch(url).then(r => r.json())
        .then(data => {
            console.log("Retrieved coins", data)
            return data
        })
    // Return the coins as a JSON object
    return response
}

/**
 * Gets an array of coin objects
 * @returns {Array} An array of coin objects
 */
async function getPopularCoins() {
    const response = await fetchPopularCoins()
    return formatCoins(response)
}

/**
 * Calls the fetchCoins() method with no parameter, since popular coins will be returned by default if no coins are specified in the query
 */
async function fetchPopularCoins() {
    const response = await fetchCoins()
    return response
}

/**
 * Formats the response from the CoinGecko API for popular coins 
 * @param {Object} response The JSON object returned from the CoinGecko API
 */
function formatCoins(response) {
    let coins = []
    response.forEach(coin => {
        const id = coin.id
        const name = coin.name
        const tickerSymbol = coin.symbol.toUpperCase()
        const price = coin.current_price.toFixed(2)
        const priceChange = coin.price_change_24h

        coins.push({
            "id" : id,
            "name" : name,
            "tickerSymbol" : tickerSymbol,
            "price" : price,
            "priceChange" : priceChange,
        })
    })
    return coins
}