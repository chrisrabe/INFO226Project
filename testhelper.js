
// Assumes that the object passed is an array
var printArray = function (array) {
    if (array == null) {
        console.log('nothing was loaded');
        return;
    }
    for (i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
};

var printObject = function (object) {
    if (object == null) {
        console.log('nothing was loaded');
    } else {
        console.log(object);
    }
};

var createProjects = function () {
    return [{
    ProjectID: "1",
    Name: "Scaffolding and painting.",
    BuildingID: "123",
    Status: "done",
    StartDate: "2016-12-12T00:00:00",
    EndDate: "2016-12-14T00:00:00",
    ContactPerson: "Joe Bloggs",
    ProjectManager: "Sally Smith",
    Contractor: "ABC Company",
    Works: [{
            TypeOfWork: "scaffolding",
            Status: "done"
        },
        {
            TypeOfWork: "painting",
            Status: "done"
        }
    ],

    Comments: [{
        Author: "Adele",
        Text: "Hello."
    }, {
        Author: "John Doe",
        Text: "Problem detected."
    }]},
    {
    ProjectID: "2",
    Name: "Roofing",
    BuildingID: "123",
    Status: "on-going",
    StartDate: "2016-12-12T00:00:00",
    EndDate: "2016-12-18T00:00:00",
    ContactPerson: "Joe Bloggs",
    ProjectManager: "Sally Smith",
    Contractor: "ABC Company",
    Works: [{
            TypeOfWork: "roofing",
            Status: "on-going"
        }
    ],

    Comments: [{
        Author: "Adele",
        Text: "Problem fixed"
    }, {
        Author: "John Doe",
        Text: "Problem detected."
    }]},
    {
    ProjectID: "3",
    Name: "Tiling & plastering.",
    BuildingID: "222",
    Status: "on-going",
    StartDate: "2016-12-16T00:00:00",
    EndDate: "2016-12-20T00:00:00",
    ContactPerson: "Jim Jones",
    ProjectManager: "Bob Smart",
    Contractor: "Building Ltd",
    Works: [{
            TypeOfWork: "tiling",
            Status: "done"
        },
        {
            TypeOfWork: "plastering",
            Status: "on-going"
        }
    ],

    Comments: [{
        Author: "Dave Kerkhof",
        Text: "Going well."
    }]},
    {
    ProjectID: "4",
    Name: "Scaffolding and painting.",
    BuildingID: "222",
    Status: "closed",
    StartDate: "2016-12-12T00:00:00",
    EndDate: "2016-12-14T00:00:00",
    ContactPerson: "Joe Bloggs",
    ProjectManager: "Sally Smith",
    Contractor: "ABC Company",
    Works: [{
            TypeOfWork: "Scaffolfing",
            Status: "done"
        },
        {
            TypeOfWork: "Painting",
            Status: "done"
        }
    ],

    Comments: [{
        Author: "Adele",
        Text: "Hello."
    }, {
        Author: "John Doe",
        Text: "Problem detected."
    }]
}];
};