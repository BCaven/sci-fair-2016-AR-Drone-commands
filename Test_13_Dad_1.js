var autonomy = require('ardrone-autonomy');
var drone = require('ar-drone');
var QRAR = require('qrar');

var bccodes = new QRAR(drone);
var mission  = autonomy.createMission();
bccodes.on('qrcode', function (code) {
  mission.client().animateLeds('fire', 5, 1);
  mission.wait(500);
//  console.log(code);
  mission.client().animate('yawDance',1000);
  mission.wait(500);
  console.log(code);


//  mission.backwards(2);
  mission.go({x: 0, y: 0, z: 1});
  mission.client().animateLeds('fire', 5, 1);
  mission.client().land();
});
mission.client().animateLeds('blinkOrange',5,3);
mission.client().ftrim();
mission.client().animateLeds('blinkGreen',5,3);
mission.client().config('video:video_channel', 3);
mission.client().animateLeds('blinkRed',5,3);
mission.takeoff()
      mission.zero()
      mission.go({x: 0, y: 0, z: 1})
      mission.go({x: 2, y: 0, z: 0.6})
      mission.client().animateLeds('blinkRed',5,3)
      mission.client().config('video:video_channel', 3)
      bccodes.start()
      mission.wait(15000)
//      mission.wait(1000)
//      mission.land()

mission.run(function (err, result) {
  if (err) {
      console.trace("Oops, something bad happened: %s", err.message);
      mission.client().stop();
      mission.client().land();
  } else {
      console.log("Dad says, No Code Errors (fka Mission Success)");
      process.exit();
  }
});
