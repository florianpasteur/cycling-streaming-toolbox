const Ant = require('ant-plus');
const stick = new Ant.GarminStick3;
const speedCadenceSensor = new Ant.SpeedCadenceSensor(stick);
// const hrSensor = new Ant.HeartRateSensor(stick);
//
// hrSensor.on('hbData', function (data) {
//        // console.log(data.DeviceID, data.ComputedHeartRate);
//         console.log(`hr: ${data.ComputedHeartRate}`);
// });


speedCadenceSensor.setWheelCircumference(2.199); //Wheel circumference in meters (70cm)

speedCadenceSensor.on('speedData', data => {
        console.log(`speed: ${data.CalculatedSpeed}`);
});

speedCadenceSensor.on('cadenceData', data => {
        console.log(`cadence: ${data.CalculatedCadence}`);
});


stick.on('startup', function () {
        debugger
       // hrSensor.attach(0, 0);
        speedCadenceSensor.attach(0, 0);
});

console.log(stick.scan());

if (!stick.open()) {
        console.log('Stick not found!');
}



