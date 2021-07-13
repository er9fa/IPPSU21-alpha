async function getCryptocurrencies() {
    const response = await fetchCryptocurrencies();
    return formatCryptocurrencies(response)
}

async function fetchCryptocurrencies() {

}

function formatCryptocurrencies(response) {

}

async function getFiatCurrencies() {
    const response = await fetchFiatCurrencies();
    return formatFiatCurrencies(response)
}

async function fetchFiatCurrencies() {
    
}

function formatFiatCurrencies(response) {

}