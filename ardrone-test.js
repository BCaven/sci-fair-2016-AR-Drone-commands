var arDrone = require('ar-drone');
var client = arDrone.createClient();
client.ftrim();
client.takeoff();
this.stop();
client.after(3000, function() {
    this.animate('yawDance', 15);
  })
  .after(1000, function() {
    this.stop();
    this.land();
  });
