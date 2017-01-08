var autonomy = require('ardrone-autonomy');
var QRAR = require('qrar');
var drone = require('ar-drone');
var mission  = autonomy.createMission();
var codes = new QRAR(drone);
codes.on('qrcode', function (code) {
      console.log(code);
      mission.client().land();
    });
mission.client().ftrim();
mission.zero();
mission.takeoff()
      .client().config('video:video_channel', 3);
      mission.altitude(0.5)  // Climb to altitude = 0.5 meter
      mission.forward(1)
      codes.start()
      mission.hover(1000)
mission.run(function (err, result) {
    if (err) {
        console.trace("Oops, something bad happened: %s", err.message);
        mission.client().stop();
        mission.client().land();
    } else {
        console.log("Mission success!");
        process.exit(0);
    }
});
