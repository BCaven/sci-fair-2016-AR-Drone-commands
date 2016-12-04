var QRAR = require('qrar');
var drone = require('ar-drone');
var client  = drone.createClient();
//change camera to downwards facing
client.config('video:video_channel', 3);

client.animateLeds('blinkRed', 5, 3);
client.ftrim();
client.takeoff();
client.after(30, function() {
    this.down(1);
  })
  .after(1000, function() {
    this.stop();
    this.front(0.05);
    codes.start();
  });


var codes = new QRAR(drone);
codes.on('qrcode', function (code) {
  console.log();
  client.stop();
  client.animateLeds('blinkRed',5,1);


  client.after(300, function() {
      this.left(0.1);
    })
    .after(100, function() {
      this.land();
    });
});

codes.start();
