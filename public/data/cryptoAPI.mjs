// TODO: To find other coin ids, find the id using the coingecko api
// Common coin ids: bitcoin, ethereum, ...
class cryptoAPI {

    getValue(coinID, elementID) {
        let value = ""
        fetch("https://api.coingecko.com/api/v3/coins/", {
                method: 'GET',
                headers: {
                    'id': coinID,
                }
            }).then(r => r.json()).then(data => {
                // Get the current price of BTC
                const value = data[0].market_data.current_price.usd.toFixed(2)
                document.getElementById(elementID).innerHTML = value;
            })
    }
}

export default cryptoAPI