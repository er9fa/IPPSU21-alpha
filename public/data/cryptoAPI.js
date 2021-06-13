// The base url for the CoinGecko API
const base = `https://api.coingecko.com/api/v3/`

/**
 * Gets the current value of a cryptocurrency in USD
 * @param coinID The ID of a cryptocurrency from the CoinGecko API
 */
async function getValue(coinID) {
    const coin = await getCoin(coinID)
    return coin[coinID].usd
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
        console.log("Retrieved coins", data)
        return data
    })
    // Return the coins as a JSON object
    return response
}