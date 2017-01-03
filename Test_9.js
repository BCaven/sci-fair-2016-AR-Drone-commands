var autonomy = require('ardrone-autonomy');
var drone = require('ar-drone');

var mission  = autonomy.createMission();
mission.client().ftrim();
mission.zero();
mission.takeoff()
      .forward(0.8)
      .forward(1)
      .right(1)
      .backward(1)
      .left(1)
      .land()

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
