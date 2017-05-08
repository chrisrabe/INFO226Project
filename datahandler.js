// This class is responsible for storing all the project data
// and provides methods which link the project details information to the building

var projects = [];
var building = null; // building which the building form displays

// returns the building information which the building form displays
var getBuilding = function () {
    return building;
};

// Assumes that the id exists in the array of buildings
// Assumes that buildings parameter is an array
var setBuilding = function (buildings, id) {
    if (buildings == null) {
        return;
    }
    // search the buildings array for the specified array
    for (i = 0; i < buildings.length; i++) {
        var item = buildings[i];
        if (item.ID == id) {
            building = buildings[i];
            break;
        }
    }
};