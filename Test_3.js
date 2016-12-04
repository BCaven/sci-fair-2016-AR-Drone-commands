var QRAR = require('qrar');
var drone = require('ar-drone');
var client  = drone.createClient();

client.animateLeds('blinkRed', 5, 3);
client.takeoff();
client.animateLeds('blinkRed', 5, 0.5);
client.stop();
client.animateLeds('blinkRed', 5, 0.5);
client.animate('yawDance',1000);
client.animateLeds('blinkRed', 5, 0.5);
client.stop();
client.animateLeds('blinkRed', 5, 0.5);
client.land();
client.animateLeds('blinkRed', 5, 0.5);
