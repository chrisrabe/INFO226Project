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
            building = clone(item);
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

// Deletes the building with the id from the buildings array
var deleteBuilding = function (buildings, id) {
    // TODO
}

// returns the project information
var getProject = function () {
    return project;
};

var setProject = function (id) {
    // search the projects with the specified id
    for (i = 0; i < projects.length; i++) {
        var item = projects[i];
        if (item.ProjectID == id) {
            project = clone(item);
            break;
        }
    }
}

// sets the projects array in the data handler
var setProjects = function (newProjects) {
    projects = newProjects;
};

// retrieves all the projects related to the building
var getProjects = function (building) {
    var results = []; // storage for projects related to building
    // find all the projects related to the building in the array
    for (i = 0; i < projects.length; i++) {
        var item = projects[i];
        if (item.BuildingID == building.ID) {
            results.push(item);
        }
    }
    return results;
};

// Adds the new project into the array
// Note : Assumes that the new project has a unique ID
var addProject = function (newProject) {
    if (newProject != null) {
        projects.push(newProject);
    }
};

// Updates the existing project into the array
// Note: Assumes that the new project exists in the projects array
var updateProject = function (newProject) {
    if (newProject != null) {
        for (i = 0; i < projects.length; i++) {
            var item = projects[i];
            if (item.ProjectID == newProject.ProjectID) {
                projects[i] = newProject;
                break;
            }
        }
    }
};

// Deletes the project from the projects array
var deleteProject = function (id) {
    // Find project with id
    // Set the index with the given project id to null
};

// Construction Functions

// Creates a new building object with empty fields.
var createBuilding = function (buildings) {
    // Create a unique id for the building object
    var id = createID(buildings, false);
    // Create an empty building
    return { ID: id, Owner: "", Address: "", BuildingType: "", ConstructionDate: "" };
};

var createProject = function (buildingID) {
    // create a unique id for the new project object
    var id = createID(projects, true);
    // Create an empty project
    return {
        ProjectID: id,
        Name: "",
        BuildingID: buildingID,
        Status: "on-going",
        StartDate: "",
        EndDate: "",
        ContactPerson: "",
        ProjectManager: "",
        Contractor: "",
        Works: [],
        Comments: []
    };
};

// Helper Methods

// Retrieves the id of the last element in the array
var getLastID = function (array, isProject) {
    var lastID = 0;
    if (isProject) {
        // sort the array from lowest to highest number
        arrays.sort(function (a, b) { return a.ProjectID - b.ProjectID });
        // retrieve the id of the last element of the array
        lastID = parseInt(array[arrays.length - 1].ProjectID);
    } else {
        // Sort the array from lowest to highest number
        array.sort(function (a, b) { return a.ID - b.ID });
        // retrieve the id of the last element in the array
        lastID = parseInt(array[array.length - 1].ID);
    }
    return lastID; // return the id
};

// If there are items in the array, 
// then it increases the id of the last element in the array by one, otherwise returns zero
var createID = function (array, isProject) {
    if (array == null) {
        return 0;
    }
    var newID = 0;
    if (array.length > 0) {
        // Retrieve the id of the last element
        var lastID = getLastID(array, isProject);
        newID = lastID + 1; // increase id of last element by one
    }
    return newID;
};

// Retrieves the id of the last element in the array
var getLastID = function (array) {
    // Sort the array from lowest to highest number
    array.sort(function (a, b) { return a.ID - b.ID });
    // retrieve the id of the last element in the array
    var lastID = parseInt(array[array.length - 1].ID);
    return lastID; // return the id
};

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