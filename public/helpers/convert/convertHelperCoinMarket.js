const baseUrlConvertHelper = "https://pro-api.coinmarketcap.com/v1/"

async function getCryptocurrencies() {
    const response = await fetchCryptocurrencies();
    return formatCryptocurrencies(response)
}

async function fetchCryptocurrencies() {
    // Begin creating the query to send to the CoinGecko API
    const url = new URL("/cm-get-crypto-currencies", location)
    const params = {
        'CMC_PRO_API_KEY': 'bc695b6b-f4b5-438b-9fab-88f108aead7f',
    }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    const response = await fetch(url).then(r => r.json())
        .then(data => {
            return data
        })

    console.log("fetchCryptocurrencies(), reponse:", response)

    // Return the coins as a JSON object
    return response
}

async function old_fetchCryptocurrencies() {
    // Begin creating the query to send to the CoinGecko API
    const url = new URL(baseUrlConvertHelper + 'cryptocurrency/map')
    const params = {
        'CMC_PRO_API_KEY': 'bc695b6b-f4b5-438b-9fab-88f108aead7f',
    }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    const response = await fetch(url).then(r => r.json())
        .then(data => {
            return data
        })

    console.log("fetchCryptocurrencies(), reponse:", response)

    // Return the coins as a JSON object
    return response
}

function formatCryptocurrencies(response) {
    let coins = []
    fetchedCoins = response.data
    fetchedCoins.forEach((cryptocurrency) => {
        const id = cryptocurrency.id
        const name = cryptocurrency.name
        const symbol = cryptocurrency.symbol.toUpperCase()

        coins.push({
            "symbol": symbol,
            "name": name,
            "coinMarketID": id
        })
    })
    console.log("formatCryptocurrencies(), cryptoCurrencies:", coins)
    return coins
}

async function getFiatCurrencies() {
    const response = await fetchFiatCurrencies();
    return formatFiatCurrencies(response)
}

async function fetchFiatCurrencies() {
    // Begin creating the query to send to the CoinGecko API
    const url = new URL("/cm-get-fiat-currencies", location)
    const params = {
        'CMC_PRO_API_KEY': 'bc695b6b-f4b5-438b-9fab-88f108aead7f',
    }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    const response = await fetch(url).then(r => r.json())
        .then(data => {
            return data
        })

    console.log("fetchFiatCcurrencies(), response:", response)

    // Return the coins as a JSON object
    return response
}

async function old_fetchFiatCurrencies() {
    // Begin creating the query to send to the CoinGecko API
    const url = new URL(baseUrlConvertHelper + 'fiat/map')
    const params = {
        'CMC_PRO_API_KEY': 'bc695b6b-f4b5-438b-9fab-88f108aead7f',
    }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    const response = await fetch(url).then(r => r.json())
        .then(data => {
            return data
        })

    console.log("fetchFiatCcurrencies(), response:", response)

    // Return the coins as a JSON object
    return response
}

function formatFiatCurrencies(response) {
    let fiatCurrencies = []
    fetchedCurrencies = response.data
    fetchedCurrencies.forEach((fiatCurency) => {
        const id = fiatCurency.id
        const name = fiatCurency.name
        const symbol = fiatCurency.symbol.toUpperCase()

        fiatCurrencies.push({
            "symbol": symbol,
            "name": name,
            "coinMarketID": id
        })
    })
    console.log("formatFiatCurrencies(), fiatCurrencies:", fiatCurrencies)
    return fiatCurrencies
}