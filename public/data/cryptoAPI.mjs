// TODO: To find other coin ids, find the id using the coingecko api
// Common coin ids: bitcoin, ethereum, ...
class cryptoAPI {

    /**
     * Get the current value of a cryptocurrency in USD
     * @param coinID The id of the cryptocurrency from the CoinGecko API
     */
    async getValue(coinID) {
        const response = await fetch("https://api.coingecko.com/api/v3/coins/", {
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
}

export default cryptoAPI