var QRAR = require('qrar');
var drone = require('ar-drone');
var client  = drone.createClient();

client.animateLeds('blinkRed', 5, 1);
var codes = new QRAR(drone);

codes.on('qrcode', function (code) {
  console.log(code);
  client.animateLeds('blinkOrange', 5, 1);

});

codes.start();
