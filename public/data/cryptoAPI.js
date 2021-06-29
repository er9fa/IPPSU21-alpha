// The base url for the CoinGecko API
const base = `https://api.coingecko.com/api/v3/`

/**
 * Gets the current value of a cryptocurrency in USD
 * @param coinID The ID of a cryptocurrency from the CoinGecko API
 */
async function getValue(coinID) {
    coinID = coinID.toLowerCase()
    const coin = await getCoin(coinID)
    return Number(coin.price).toFixed(2)
}

/**
 * Gets the current value, market cap, and 24hr change for a cryptocurrency
 * @param coinID The ID of a cryptocurrency to look up in the CoinGecko API
 */
async function getCoin(coinID) {
    coinID = coinID.toLowerCase()
    coin = (await getCoins([coinID]))[0]
    return coin
}

/**
 * Gets the current value, market cap, and 24hr change for every cryptocurrency in an array
 * @param coinIDs An array of cryptocurrency ids from the CoinGecko API
 */
async function getCoins(coinIDs) {
    const response = await fetchCoins(coinIDs)
    return formatCoins(response)
}

async function fetchCoins(coinIDs) {
    const url = new URL(base + 'coins/markets')
    const params = {
        'vs_currency': 'usd',
        'price_change_percentage': '24h'
    }
    // If an array of coin IDs has been provided, add it to the query
    // If no coin IDs are specified, 
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

async function getPopularCoins() {
    const response = await fetchPopularCoins()
    return formatCoins(response)
}

/**
 * Returns a list with 100 of the most popular cryptocurrencies, sorted by market cap in descending order
 */
async function fetchPopularCoins() {
    // Return the coins as a JSON object
    const response = await fetchCoins()
    return response
}

/**
 * Formats the response from the CoinGecko API for popular coins 
 * @param response The JSON object returned from the CoinGecko API
 */
function formatCoins(response) {
    let coins = []
    response.forEach(coin => {
        const name = coin.name
        const tickerSymbol = coin.symbol.toUpperCase()
        const price = coin.current_price.toFixed(2)
        const priceChange = coin.price_change_24h

        coins.push({
            "name" : name,
            "tickerSymbol" : tickerSymbol,
            "price" : price,
            "priceChange" : priceChange
        })

    })
    return coins
}