var QRAR = require('qrar');
var drone = require('ar-drone');
var client  = drone.createClient();
client.ftrim();
client.takeoff();
client.stop();
client.land();
