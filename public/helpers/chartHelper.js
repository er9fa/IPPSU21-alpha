// TODO: How do you import cryptoAPI.js inside of this file, instead of in the HTML page template?

// Requires the following to first be imported: CryptoAPI.js 

let dataPoints = []
let coin = ""

/**
 * Creates a chart which plots the value of a cryptocurrency over time (every 20 seconds)
 * @param {String} coinID The ID of the cryptocurrency to be charted
 * @param {String} divElementID The ID of the HTML div element to be populated with the chart
 * @returns A chart object (see Chart.js documentation)
 */
function createChart(coinID, divElementID) {
    coin = coinID
    labels = getLabels()
    const data = {
        labels: labels,
        datasets: [{
            label: `${coinID} value`,
            backgroundColor: 'rgb(0, 102, 204)',
            borderColor: 'rgb(0, 153, 255)',
            data: dataPoints
        }]
    };
    const config = {
        type: 'line',
        data,
        options: {
            responsive: false,
            scales: {
                // Changes the y-axis ticker values
                y: {
                    ticks: {
                        // Append a dollar sign to the tickers
                        callback: function(value, index, values) {
                            return '$' + value.toFixed(2);
                        }
                    }
                }
            },
            plugins: {
                // Remove the legend displaying the meaning of the line on the graph
                legend: {
                    display: false
                }
            }
        }
    };
    var chart = new Chart(
        document.getElementById(divElementID),
        config
    );

    // Add the first data point to the chart
    updateChart(chart, dataPoints)
    // Continue adding data points to the chart every 20 seconds
    setInterval(() => updateChart(chart, dataPoints), 20000)

    return chart
}

function getLabels() {
    let currentTime = new Date()

    let hour = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    let seconds = currentTime.getSeconds()

    const labels = []
    labels[0] = hour + ":" + minutes + ":" + seconds
    for (i = 0; i < 10; i++) {
        currentTime.setSeconds(currentTime.getSeconds() + 20)
        hour = currentTime.getHours()
        minutes = currentTime.getMinutes()
        seconds = currentTime.getSeconds()

        if (minutes < 10) minutes = "0" + minutes
        if (seconds < 10) seconds = "0" + seconds

        labels[i] = hour + ":" + minutes + ":" + seconds
    }

    return labels
}

function updateChart() {
    getValue(coin).then(value => {
        dataPoints.push(value)
        chart.update()
        console.log(chart.data)
    })
}
