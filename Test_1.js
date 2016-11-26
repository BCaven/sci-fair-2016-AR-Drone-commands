
var QRAR = require('qrar');
var drone = require('ar-drone');
var client  = drone.createClient();
//change camera to downwards facing
client.config('video:video_channel', 3);

client.animateLeds('blinkRed', 5, 3);
client.ftrim();
client.takeoff();
var codes = new QRAR(drone);

codes.on('qrcode', function (code) {
  console.log(code);
  client.land();
});

codes.start();

// Function that makes the drone do something
//var scan = function(drone){
  
  // drone actions go here
  //drone.front(0.1);
  //drone.stop
  //codes.on('qrcode', function (code) {
    //console.log(code);
    //client.land();
  //});
//};

// Call it here like this
//scan(client);
