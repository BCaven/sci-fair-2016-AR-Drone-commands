// Not Tested
var QRAR = require('qrar');
var drone = require('ar-drone');
var client  = drone.createClient();

client.animateLeds('blinkRed', 5, 3);
client.takeoff();
client.stop();
client.animate('yawDance',1000);
client.stop();
client.land();
