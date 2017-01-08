var autonomy = require('ardrone-autonomy');
var QRAR = require('qrar');
var drone = require('ar-drone');

var mission  = autonomy.createMission();
//var codes = new QRAR(drone);
//codes.on('qrcode', function (code) {
//      console.log(code);
//      mission.client().land();
//    });
mission.client().ftrim();
mission.zero();
mission.takeoff()
//      .client().config('video:video_channel', 3);
      .forward(0.8)
      console.log("over starting point")
      mission.altitude(0.5)
      mission.forward(1)
      mission.cw(90)
      mission.forward(1)
      mission.cw(90)
      mission.forward(1)
      mission.cw(90)
      mission.forward(1)
      mission.hover(1000)
      mission.land()
      //codes.start()
      //mission.hover(1000)
      //.right(1)
       //.backward(1)
       //.left(1)
       //.hover(1000)  Hover in place for 1 second


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
