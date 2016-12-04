var QRAR = require('qrar');
var drone = require('ar-drone');
var client  = drone.createClient();
client.setMaxListeners(10);
client.ftrim();
//client.animateLeds('blinkRed', 5, 3);
//client.takeoff();
client.config('video:video_channel', 3);
var codes = new QRAR(drone);

codes.on('qrcode', function (code) {
  console.log(code);
  if (code = 'client.land();'){
    client.animateLeds('blinkGreen',5,1);
  }
  if (code = 'client.takeoff();'){
    client.animateLeds('blinkRed', 5, 1);
  }
});

codes.start();
