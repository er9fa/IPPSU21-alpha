// TODO: How do you import cryptoAPI.js inside of this file, instead of in the HTML page template?

function createChart(dataPoints) {
    const data = {
        labels: labels,
        datasets: [{
            label: 'Cryptocurrency value',
            backgroundColor: 'rgb(0, 102, 204)',
            borderColor: 'rgb(0, 153, 255)',
            data: dataPoints
        }]
    };
    const config = {
        type: 'line',
        data,
        options: {
            responsive: false
        }
    };
    var chart = new Chart(
        document.getElementById('chart'),
        config
    );

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
        currentTime.setSeconds(currentTime.getSeconds() + 5)
        hour = currentTime.getHours()
        minutes = currentTime.getMinutes()
        seconds = currentTime.getSeconds()

        if (minutes < 10) minutes = "0" + minutes
        if (seconds < 10) seconds = "0" + seconds

        labels[i] = hour + ":" + minutes + ":" + seconds
    }

    return labels
}