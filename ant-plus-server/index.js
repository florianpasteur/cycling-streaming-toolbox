const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

const sensors = {
    hrm: 60,
    speed: 0,
    cadence: 0
}
app.post('/sensor/hrm', (req, res) => {
    sensors.hrm = req.body.data.ComputedHeartRate;
    //console.dir(req.body)
    res.send('OK')
});
app.post('/sensor/speed', (req, res) => {
    sensors.hrm = req.body.data.CalculatedSpeed * 3.6; // m/s to km/h
    console.dir(req.body)
    res.send('OK')
});
app.post('/sensor/cadence', (req, res) => {
    sensors.hrm = req.body.data.CalculatedCadence;
    console.dir(req.body)
    res.send('OK')
});

app.get('/widgets/hrm', (req, res) => {
    res.send(hrmWidget(sensors.hrm))
})

app.get('/widgets/speed', (req, res) => {
    res.send(speedWidget(sensors.speed))
})

app.get('/widgets/cadence', (req, res) => {
    res.send(cadenceWidget(sensors.cadence))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


function htmlTemplate(body) {
    return `<html>
<head>
<meta http-equiv="refresh" content="0.5" />
<title>Widgets</title>
<style>
h1 {
font-size: 8em;
}
</style>
</head>
<body>
${body}
</body>
</html>`
}

function hrmWidget(hrm) {
    return htmlTemplate(`<h1>${hrm} BPM</h1>`)
}

function speedWidget(speed) {
    return htmlTemplate(`<h1>${speed} km/h</h1>`)
}
function cadenceWidget(cadence) {
    return htmlTemplate(`<h1>${cadence} RPM</h1>`)
}
