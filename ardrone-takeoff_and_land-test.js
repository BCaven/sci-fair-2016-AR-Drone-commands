var arDrone = require('ar-drone');
var client = arDrone.createClient();
client.ftrim();
client.takeoff();
client.land();
