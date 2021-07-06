/* 
Dependencies: 
dropdownHelper.js 
*/

/**
 * Converts an array of coins into dropdown menu options
 * @param {Array} coins An array of coins from a getCoins() call
 * @returns {Array} An array of dropdown menu options in the required format (see dropdownHelper for required format and more info)
 */
function convertCoinsToDropdownOptions(coins) {
    const formattedCoins = []
    // Convert the retrieved coins into the format the dropdown menu library requires to display them (see Select2 library for more details)
    coins.forEach((coin, index) => {
        coinFormatted = {
            id: index,
            text: coin.tickerSymbol + " " + coin.name
        }
        formattedCoins.push(coinFormatted)
    })
    return formattedCoins
}