var autonomy = require('ardrone-autonomy');
var drone = require('ar-drone');
var QRAR = require('qrar');

var codes = new QRAR(drone);

codes.on('qrcode', function (code) {
  console.log(code);
  if (code = 'home') {
    mission.client().animateLeds('blinkOrange', 5, 1);
  } else {
    mission.client().animateLeds('blinkRed', 5, 1);
  }
  mission.client().animate('yawDance',1000);
  mission.go({x: 0, y: 0, z: 1});
  mission.client().animateLeds('fire', 5, 1);
  mission.client().land();
});


var mission  = autonomy.createMission();
mission.client().ftrim();
mission.zero();
mission.client().config('video:video_channel', 3);
mission.takeoff()
      .go({x: 0, y: 0, z: 1})
      .go({x: 2, y: 0, z: 0.6})
      .client().config('video:video_channel', 3)
      codes.start()

mission.run(function (err, result) {
  if (err) {
      console.trace("Oops, something bad happened: %s", err.message);
      mission.client().stop();
      mission.client().land();
  } else {
      console.log("Mission success!");
      //process.exit(0);
  }
});
