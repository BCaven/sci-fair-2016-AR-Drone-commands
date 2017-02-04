var autonomy = require('ardrone-autonomy');
var drone = require('ar-drone');
var QRAR = require('qrar');
var bccodes = new QRAR(drone);
var mission  = autonomy.createMission();
bccodes.on('qrcode', function (code) {
  console.log(code);
  mission.client().land();
});
mission.client().ftrim();
mission.client().config('video:video_channel', 3);
mission.takeoff()
      mission.zero()
      mission.go({x: 0, y: 0, z: 1})
      mission.go({x: 2, y: 0, z: 0.6})
      mission.client().config('video:video_channel', 3)
      bccodes.start()

mission.run(function (err, result) {
  if (err) {
      console.trace("Oops, something bad happened: %s", err.message);
      mission.client().stop();
      mission.client().land();
  } else {
      console.log("Mission success!");
      process.exit();
  }
});
