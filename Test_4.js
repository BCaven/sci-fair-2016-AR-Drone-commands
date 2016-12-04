// makes drone blink LEDs red for 4 seconds, takeoff, go forwards, stop, go down stop, then start looking for QR codes
// if it sees a qr code it logs it in the console and lands, if not, the drone lands after 10 seconds

var QRAR = require('qrar');
var drone = require('ar-drone');
var client  = drone.createClient();
//change camera to downwards facing
client.config('video:video_channel', 3);

client.animateLeds('blinkRed', 5, 4);
client.ftrim();
client.takeoff();
var codes = new QRAR(drone);
client.front(0.5);
client.after(2500, function() {
    this.stop();
    this.down(0.1);
  })
  .after(3000, function() {
    this.stop();
    codes.on('qrcode', function (code) {
      console.log();
      client.animateLeds('blinkRed',5,1);
      //client.on('navdata', console.log, 10);
      client.land();
    });
    codes.start();
  })
  .after(10000, function(){
    this.land();
  })
//codes.on('qrcode', function (code) {
//  console.log();
//  client.animateLeds('blinkRed',5,1);
  //client.on('navdata', console.log, 10);
//  client.land();
//});

//codes.start();
