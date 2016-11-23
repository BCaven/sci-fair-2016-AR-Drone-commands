var QRAR = require('qrar');
var drone = require('ar-drone');
var client  = drone.createClient();
var t = 0;
client.animateLeds('blinkRed', 5, 3);
client.takeoff();
while(t<30){
  if(t===15){
    client.animate('yawDance',1000);
  }
  client.stop();
  t++;
}
client.land();
