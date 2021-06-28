// The base url for the CoinGecko API
const base = `https://api.coingecko.com/api/v3/`

/**
 * Gets the current value of a cryptocurrency in USD
 * @param coinID The ID of a cryptocurrency from the CoinGecko API
 */
async function getValue(coinID) {
    coinID = coinID.toLowerCase()
    const coin = await getCoin(coinID)
    return coin[coinID].usd.toFixed(2)
}

/**
 * Gets the current value, market cap, and 24hr change for a cryptocurrency
 * @param coinID The ID of a cryptocurrency from the CoinGecko API
 */
async function getCoin(coinID) {
    return getCoins([coinID])
}

/**
 * Gets the current value, market cap, and 24hr change for every cryptocurrency in an array
 * @param coinIDs An array of cryptocurrency ids from the CoinGecko API
 */
async function getCoins(coinIDs) {
    const url = new URL(base + 'simple/price')
    const params = {
        'ids': coinIDs.join(),
        'vs_currencies': 'usd',
        'include_market_cap': true,
        'include_24hr_change': true
    }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    const response = await fetch(url).then(r => r.json())
        .then(data => {
            /* Coins are returned in the following JSON format
            {
                "bitcoin": {
                    "usd": 35674,
                    "usd_market_cap": 668148892256.3638,
                    "usd_24h_vol": 35636689529.785774,
                    "usd_24h_change": -4.35081290184123
                },
                "ethereum": {
                    "usd": 2380.23,
                    "usd_market_cap": 276714108452.90765,
                    "usd_24h_vol": 28220756437.30981,
                    "usd_24h_change": 1.0382271224597475
                }
            } */
            console.log("Retrieved specified coins", data)
            return data
        })
    // Return the coins as a JSON object
    return response
}

async function getPopularCoins() {
    const response = await fetchPopularCoins()
    return formatPopularCoins(response)
}

/**
 * Returns a list with 100 of the most popular cryptocurrencies, sorted by market cap in descending order
 */
async function fetchPopularCoins() {
    const url = new URL(base + 'coins/markets')
    const params = {
        'vs_currency': 'usd',
        'price_change_percentage': '24h'
    }

    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    const response = await fetch(url).then(r => r.json())
        .then(data => {
            console.log("Retrieved popular coins", data)
            return data
        })
    // Return the coins as a JSON object
    return response
}

/**
 * Formats the response from the CoinGecko API for popular coins 
 * @param response The JSON object returned from the CoinGecko API
 */
function formatPopularCoins(response) {
    let coins = []
    response.forEach(coin => {
        const name = coin.name
        const tickerSymbol = coin["symbol"].toUpperCase()
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