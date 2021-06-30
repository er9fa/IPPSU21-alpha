// TODO: How do you import coinHelper.js inside of this file, instead of in the HTML page template?

// Requires the following to first be imported: coinHelper.js 

let chartCoin = {} // The coin to be tracked on the chart
const updateInterval = 20 // Update the chart every 20 seconds
let dataPoints = [] // An array of the data points to be plotted on the chart
let chartXAxisTickers = [] // An array of the x-axis tickers
let mostRecentTimeTicker = {} // The rightmost time ticker on the chart x-axis represented as a date object (e.g. 05:25:17 PM)
let intervalID;

/**
 * Creates a chart which plots the value of a cryptocurrency over time (every 20 seconds)
 * @param {String} coinID The ID of the cryptocurrency to be charted
 * @param {String} divElementID The ID of the HTML div element to be populated with the chart
 * @returns A chart object (see Chart.js documentation)
 */
function createChart(coinID, divElementID) {
    chartXAxisTickers = getStartingXAxisTickers()
    const data = {
        labels: chartXAxisTickers,
        datasets: [{
            label: coinID + " value",
            data: dataPoints,
            backgroundColor: [
                "rgb(63, 191, 127)"
            ],
            borderColor: [
                "rgb(63, 191, 127)"
            ],
        }]
    };
    const config = {
        type: 'line',
        data,
        options: {
            responsive: false,
            scales: {
                y: {
                    ticks: {
                        // Changes the y-axis ticker values
                        // Append a dollar sign to the tickers
                        callback: function (value, index, values) {
                            return '$' + value.toFixed(2);
                        },
                    },
                    grace: 30
                },
                x: {
                    grid: {
                        drawOnChartArea: false,
                    }
                }
            },
            elements: {
                point: {
                    radius: 3
                }
            },
            plugins: {
                // Remove the legend displaying the meaning of the line on the chart
                legend: {
                    display: false
                }
            }
        }
    }

    var chart = new Chart(
        document.getElementById(divElementID),
        config
    );

    getCoin(coinID).then(gc_coin => {
        // Add the first data point to the chart
        chartCoin = gc_coin
        updateChart(chart, dataPoints)
        // Continue adding data points to the chart every 20 seconds
        intervalID = setInterval(() => updateChart(chart, dataPoints), updateInterval * 1000)
    })

    return chart
}

function getStartingXAxisTickers(array) {
    mostRecentTimeTicker = new Date()

    let tickers = []
    tickers[0] = convertTimeToString(mostRecentTimeTicker)
    for (i = 1; i < 10; i++) {
        // The next time ticker on the x-axis should be +20s ahead
        incrementTimeByXSeconds(mostRecentTimeTicker, updateInterval)
        tickers[i] = convertTimeToString(mostRecentTimeTicker)
    }

    return tickers
}

function convertTimeToString(time) {
    hour = time.getHours()
    minutes = time.getMinutes()
    seconds = time.getSeconds()

    if (hour > 12) {
        hour -= 12
    }

    if (hour > 12) hour -= 12
    if (minutes < 10) minutes = "0" + minutes
    if (seconds < 10) seconds = "0" + seconds

    return hour + ":" + minutes + ":" + seconds
}

function incrementTimeByXSeconds(time, seconds) {
    time.setSeconds(mostRecentTimeTicker.getSeconds() + seconds)
}

function updateChart() {
    if (dataPoints.length > 8) {
        incrementTimeByXSeconds(mostRecentTimeTicker, updateInterval)
        chartXAxisTickers.push(convertTimeToString(mostRecentTimeTicker))
        chart.update()
    }
    getValue(chartCoin.id).then(value => {
        dataPoints.push(value)
        if (value < dataPoints[0]) {
            chart.data.datasets[0].backgroundColor = "rgb(234, 67, 53)"
            chart.data.datasets[0].borderColor = "rgb(234, 67, 53)"
        } else {
            chart.data.datasets[0].backgroundColor = "rgb(52, 168, 83)"
            chart.data.datasets[0].borderColor = "rgb(52, 168, 83)"
        }
        
        updateElementChartTitleAndCoinPrice(chartCoin.name, document.getElementById("chart-title"), document.getElementById("price-change-image"))

        chart.update()
    })
}

function changeChartCoin(coinOptionObject) {
    // See convertPopularCoinsToDropdownOptions() for how the options are formatted
    console.log("next:", coinOptionObject)

    const index = coinOptionObject.id
    const pc_coin = popularCoins[index]

    resetChart()

    updateElementChartTitleAndCoinPrice(pc_coin.name, document.getElementById("chart-title"), document.getElementById("price-change-image"))

    chart = createChart(pc_coin.id, "chart")
}

function updateElementChartTitleAndCoinPrice(coinName, titleTextElement, priceChangeImageElement) {
    lastDatapoint = dataPoints[dataPoints.length - 1]

    let result = ""
    
    let percentChange
    if (dataPoints.length <= 1) {
        percentChange = 0.000
    } else {
        percentChange = 100 * (lastDatapoint - dataPoints[0]) / dataPoints[0]
    }
    percentChange = numeral(percentChange).format("0,0.000")
    lastDatapoint = numeral(lastDatapoint).format("0.00")

    hasPriceIncreased = (percentChange >= 0)
    const priceChangeSymbolImage = (hasPriceIncreased) ?
        "/images/scrolling-bar-green-triangle.png" : "/images/scrolling-bar-red-triangle.png"
    const plusOrMinus = hasPriceIncreased ? "+" : ""

    result = coinName + " $" + lastDatapoint + " (" + plusOrMinus + percentChange + "%)"

    titleTextElement.textContent = result
    priceChangeImageElement.src = priceChangeSymbolImage
}

/**
 * After the chart has been created, it can be reset so that it tracks a new coin
 */
function resetChart() {
    // Clears the chart library's data
    chart.destroy()

    // Clear the global variables storing chart datapoints and etc.
    dataPoints = []
    chartXAxisTickers = []
    mostRecentTimeTicker = []

    // Stop the chart updating interval
    clearInterval(intervalID) // TODO: Why is the chart updating with 2 datapoints at a time when selecting a new coin from the dropdown menu?
}
