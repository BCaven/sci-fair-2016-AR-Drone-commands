//does not work!
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

// Function that makes the drone do something
var dosomething = function(drone){
  
  // drone actions go here
  drone.action(parameter);
  drone.do(something);
};

// Call it here like this
dosomething(client);
