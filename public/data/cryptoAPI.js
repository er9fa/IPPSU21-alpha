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
        console.log("Retrieved specified coins", data)
        return data
    })
    // Return the coins as a JSON object
    return response
}

/**
 * Returns a list with 100 of the most popular cryptocurrencies, sorted by market cap in descending order
 */
async function getPopularCoins(){
    const url = new URL(base + 'coins/markets')
    const params = {
        'vs_currency': 'usd',
        'price_change_percentage': '24h'
    }

    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    const response = await fetch(url).then(r => r.json())
    .then(data => {
        // 100 Coins are returned in the following JSON format 
        /*
        [
        {
            "id": "bitcoin",
            "symbol": "btc",
            "name": "Bitcoin",
            "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
            "current_price": 35669,
            "market_cap": 668216297092,
            "market_cap_rank": 1,
            "fully_diluted_valuation": 749060946977,
            "total_volume": 32832134478,
            "high_24h": 36790,
            "low_24h": 35110,
            "price_change_24h": -378.65548191,
            "price_change_percentage_24h": -1.05043,
            "market_cap_change_24h": -5724709636.561768,
            "market_cap_change_percentage_24h": -0.84944,
            "circulating_supply": 18733512,
            "total_supply": 21000000,
            "max_supply": 21000000,
            "ath": 64805,
            "ath_change_percentage": -44.93507,
            "ath_date": "2021-04-14T11:54:46.763Z",
            "atl": 67.81,
            "atl_change_percentage": 52525.27449,
            "atl_date": "2013-07-06T00:00:00.000Z",
            "roi": null,
            "last_updated": "2021-06-13T02:51:25.144Z"
        },
        {
            "id": "ethereum",
            "symbol": "eth",
            "name": "Ethereum",
            "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
            "current_price": 2407.15,
            "market_cap": 279881900874,
            "market_cap_rank": 2,
            "fully_diluted_valuation": null,
            "total_volume": 27212359519,
            "high_24h": 2453.52,
            "low_24h": 2284.43,
            "price_change_24h": 113.39,
            "price_change_percentage_24h": 4.9436,
            "market_cap_change_24h": 15933727135,
            "market_cap_change_percentage_24h": 6.03669,
            "circulating_supply": 116268435.999,
            "total_supply": null,
            "max_supply": null,
            "ath": 4356.99,
            "ath_change_percentage": -44.79171,
            "ath_date": "2021-05-12T14:41:48.623Z",
            "atl": 0.432979,
            "atl_change_percentage": 555451.32447,
            "atl_date": "2015-10-20T00:00:00.000Z",
            "roi": {
            "times": 89.19250236792361,
            "currency": "btc",
            "percentage": 8919.25023679236
            },
            "last_updated": "2021-06-13T02:51:34.162Z"
        }
        ]
        */
        console.log("Retrieved popular coins", data)
        return data
    })
    // Return the coins as a JSON object
    return response
}