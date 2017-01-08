var QRAR = require('qrar');
var drone = require('ar-drone');
var client  = drone.createClient();
client.setMaxListeners(10);
client.ftrim();
client.animateLeds('blinkRed', 5, 3);
client.takeoff();
client.config('video:video_channel', 3);
var codes = new QRAR(drone);
client.front(0.1);
codes.on('qrcode', function (code) {
  console.log(code);
  client.land();
});

codes.start();
