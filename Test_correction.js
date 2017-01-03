var drone = require('ar-drone');
var QRAR = require('qrar');
var autonomy = require('ardrone-autonomy');
var mission  = autonomy.createMission();
var codes = new QRAR(drone);
codes.on('qrcode', function (code) {
  console.log(code);
  mission.go({x: 0, y: 0, z: 1})
  mission.wait(500)
  mission.land()
  mission.log("data.txt")

});
mission.client().ftrim();
mission.zero();
mission.takeoff()
      .client().config('video:video_channel', 3);
//      mission.forward(0.95)
      console.log("over starting point")
//      mission.right(0.57)
      mission.hover(500)
//      mission.forward(2)
//      mission.left(2)
      mission.go({x: 0, y: 2, z: 0.5})
//      mission.go({x: 2, y: -2, z: 1})

      mission.wait(1000)
//      mission.land()
      codes.start()
//      mission.hover(1000)
//      mission.go({x: 0, y: 0, z: 1})
//      mission.wait(500)
//      mission.land()
//      mission.log("data.txt")



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
