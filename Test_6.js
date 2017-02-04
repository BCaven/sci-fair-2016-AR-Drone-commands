var QRAR = require('qrar');
var client  = drone.createClient();
client.takeoff();
client.config('video:video_channel', 3);
var codes = new QRAR(drone);
client.front(0.1);
codes.on('qrcode', function (code) {
  console.log(code);
  client.land(();
});

codes.start();
