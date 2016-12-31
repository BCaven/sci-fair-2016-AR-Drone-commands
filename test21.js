const arDrone = require('ar-drone');
var client  = arDrone.createClient();
var autonomy = require('ardrone-autonomy');
var mission  = autonomy.createMission();
var new_mission = function(mission,actions) {
    // Actions should be in the form of [("front",12),("back",2)]
    // goto actions should be [("goto",{x:0,y:0})]
    // any actions without any parameters should be like ("takeoff") or ("land")
    this.mission = mission;
    this.actions = actions || [];
};
new_mission.prototype.setActions = function (actions) {
    this.actions = actions;
};
new_mission.prototype.runActions = function () {
    var i;
    for (i of this.actions) {
        switch (i[0]) {
            case "goto":
                this.mission.go(i[1]);
                break;
            case "takeoff":
                this.mission.takeoff();
                break;
            case "hover":
                this.mission.hover();
                break;
            case "land":
                this.mission.land();
                break;
            default:
                break;
        }
    }
};
mission1 = new new_mission(mission);
mission1.setActions([("takeoff"),("goto",{x:1,y:1}),("land")]);
mission1.runActions();
