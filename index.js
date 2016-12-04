var QRAR = require('qrar');
var drone = require('ar-drone');
var client  = drone.createClient();

var codes = new QRAR(drone);

codes.on('qrcode', function (code) {
  console.log(code);
  client.takeoff();

});

codes.start();
