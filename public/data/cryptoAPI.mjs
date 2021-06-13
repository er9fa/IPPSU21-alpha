const base = `https://api.coingecko.com/api/v3/`

class cryptoAPI {

    /**
     * Get the current value of a cryptocurrency in USD
     * @param coinID The id of the cryptocurrency from the CoinGecko API
     */
    async getValue(coinID) {
        const coin = this.getCoin(coinID)
        const url = base + 'coins'
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'id': coinID,
            }
        }).then(r => r.json()).then(data => {
            // Get the current price of the coin
            return data[0].market_data.current_price.usd.toFixed(2)
        })

        return response
    }

    /**
     * Gets the current value, market cap, and 24hr change for a coin
     * @param coinID The coin's id from the CoinGeckoAPI
     */
    getCoin(coinID) {
        return this.getCoins([coinID])
    }

    /**
     * Gets the current value, market cap, and 24hr change for each coin
     * @param coinIDs The list of coin ids from the CoinGecko API
     */
    async getCoins(coinIDs) {
        const url = new URL(base + 'simple/price')
        const params = {
            'ids': coinIDs.join(),
            'vs_currencies': 'usd',
            'include_market_cap': true,
            'include_24hr_change': true
        }
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

        const response = await fetch(url).then(r => r.json()).then(data => {
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
            return data
        })
        // Return the coins as a JSON object
        return response
    }

}

export default cryptoAPI