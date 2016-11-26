var QRAR = require('qrar');
var drone = require('ar-drone');
var client  = drone.createClient();
//Makes drone takeoff, stabalize and land
client.animateLeds('blinkRed', 5, 3);
client.takeoff();
client.stop();
client.land();
