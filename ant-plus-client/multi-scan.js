'use strict';

const Ant = require('ant-plus');
const axios = require('axios');
const stick = new Ant.GarminStick3();

const hrScanner = new Ant.HeartRateScanner(stick);
hrScanner.on('hbData', data => {
    axios.post(process.env.ANT_SERVER_ADDRESS + '/sensor/hrm', {data})
    console.log(`id: ${data.DeviceID}`);
    console.dir(data);
});

const fitnessEquipmentScanner = new Ant.FitnessEquipmentScanner(stick);
fitnessEquipmentScanner.on('fitnessData', data => {
    console.log(`id: ${data.DeviceID}`);
    console.dir(data);
});

const speedScanner = new Ant.SpeedScanner(stick);
speedScanner.on('speedData', data => {
    axios.post(process.env.ANT_SERVER_ADDRESS + '/sensor/speed', {data})
    console.log(`id: ${data.DeviceID}`);
    console.dir(data);
});

const cadenceScanner = new Ant.CadenceScanner(stick);
cadenceScanner.on('cadenceData', data => {
    axios.post(`${process.env.ANT_SERVER_ADDRESS}/sensor/cadence`, {data})
    console.log(`id: ${data.DeviceID}`);
    console.dir(data);
});


stick.on('startup', function() {
    console.log('startup');
    hrScanner.scan();
    speedScanner.scan();
    cadenceScanner.scan();
    fitnessEquipmentScanner.scan();
});

if (!stick.open()) {
    console.log('Stick not found!');
}
