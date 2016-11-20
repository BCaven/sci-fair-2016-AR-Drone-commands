var QRAR = require('qrar');
var drone = require('ar-drone');
var client  = drone.createClient();

client.animateLeds('blinkRed', 5, 3);
client.takeoff();
var codes = new QRAR(drone);

codes.on('qrcode', function (code) {
  console.log(code);
  client.land();
});

codes.start();
