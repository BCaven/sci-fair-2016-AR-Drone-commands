var autonomy = require('ardrone-autonomy');
var drone = require('ar-drone');
var QRAR = require('qrar');
var codeseen = false
var bccodes = new QRAR(drone);
var mission  = autonomy.createMission();
bccodes.on('qrcode', function (code) {
  mission.client().animate('yawDance', 1000);
});
mission.client().config('video:video_channel', 3);
mission.zero();
mission.takeoff()
      mission.go({x: 0, y: 0, z: 0.6})
      mission.client().config('video:video_channel', 3)
      bccodes.start()


mission.run(function (err, result) {
  if (err) {
      console.trace("Oops, something bad happened: %s", err.message);
      mission.client().stop();
      mission.client().land();
  } if (codeseen === true) {
      console.log("Dad says, No Code Errors (fka Mission Success)");
      process.exit();
  }
});
