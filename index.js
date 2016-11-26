var QRAR = require('qrar');
var drone = require('ar-drone');
var client  = drone.createClient();
this.stop();
client.animateLeds('blinkRed', 5, 1);
var codes = new QRAR(drone);

codes.on('qrcode', function (code) {
  console.log(code);
  client.takeoff();
  client.stop();
  client.animateLeds('blinkOrange', 5, 1);
  client.land();

});

codes.start();
