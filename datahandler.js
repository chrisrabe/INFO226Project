// This class is responsible for storing all the project data
// and provides methods which link the project details information to the building

var projects = [];
var project = null; // project which the project form displays
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
            building = clone(buildings[i]);
            break;
        }
    }
};

// Updates the building object in the array
var updateBuilding = function (buildings, building) {
    if (building == null) {
        return;
    }
    for (i = 0; i < buildings.length; i++) {
        var item = buildings[i];
        if (item.ID == building.ID) {
            buildings[i] = building;
            break;
        }
    }
};

// Helper Methods

// We use this in order to avoid changing the list containing actual values on the server
// Creates a copy of the given object - would have the same values but different memory address
var clone = function (obj) {
    if (obj instanceof Object) {
        var copy = obj.constructor();
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
        }
        return copy;
    }
    return null;
};