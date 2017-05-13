
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

var getProjects = function () {
    return [{
        "ProjectID": "1",
        "Name": "Scaffolding and painting.",
        "BuildingID": "123",
        "Status": "closed",
        "StartDate": "2016-12-12T00:00:00",
        "EndDate": "2016-12-14T00:00:00",
        "ContactPerson": "Joe Bloggs",
        "ProjectManager": "Sally Smith",
        "Contractor": "ABC Company",
        "Works": [{
            "TypeOfWork": "scaffolding",
            "Status": "done"
        },
        {
            "TypeOfWork": "painting",
            "Status": "on-going"
        }
        ],

        "Comments": [{
            "Author": "Adele",
            "Text": "Hello."
        }, {
            "Author": "John Doe",
            "Text": "Problem detected."
        }]
    }, {
        "ProjectID": "2",
        "Name": "Roof Construction.",
        "BuildingID": "123",
        "Status": "closed",
        "StartDate": "2016-12-12T00:00:00",
        "EndDate": "2016-12-14T00:00:00",
        "ContactPerson": "Joe Bloggs",
        "ProjectManager": "Sally Smith",
        "Contractor": "ABC Company",
        "Works": [{
            "TypeOfWork": "scaffolding",
            "Status": "done"
        },
        {
            "TypeOfWork": "painting",
            "Status": "on-going"
        }
        ],

        "Comments": [{
            "Author": "Adele",
            "Text": "Hello."
        }, {
            "Author": "John Doe",
            "Text": "Problem detected."
        }]
    }, {
        "ProjectID": "3",
        "Name": "Wall Construction",
        "BuildingID": "123",
        "Status": "closed",
        "StartDate": "2016-12-12T00:00:00",
        "EndDate": "2016-12-14T00:00:00",
        "ContactPerson": "Joe Bloggs",
        "ProjectManager": "Sally Smith",
        "Contractor": "ABC Company",
        "Works": [{
            "TypeOfWork": "scaffolding",
            "Status": "done"
        },
        {
            "TypeOfWork": "painting",
            "Status": "on-going"
        }
        ],

        "Comments": [{
            "Author": "Adele",
            "Text": "Hello."
        }, {
            "Author": "John Doe",
            "Text": "Problem detected."
        }]
    }, {
        "ProjectID": "4",
        "Name": "Window Installation.",
        "BuildingID": "123",
        "Status": "closed",
        "StartDate": "2016-12-12T00:00:00",
        "EndDate": "2016-12-14T00:00:00",
        "ContactPerson": "Joe Bloggs",
        "ProjectManager": "Sally Smith",
        "Contractor": "ABC Company",
        "Works": [{
            "TypeOfWork": "scaffolding",
            "Status": "done"
        },
        {
            "TypeOfWork": "painting",
            "Status": "on-going"
        }
        ],

        "Comments": [{
            "Author": "Adele",
            "Text": "Hello."
        }, {
            "Author": "John Doe",
            "Text": "Problem detected."
        }]
    }, {
        "ProjectID": "5",
        "Name": "Plumbing",
        "BuildingID": "222",
        "Status": "closed",
        "StartDate": "2016-12-12T00:00:00",
        "EndDate": "2016-12-14T00:00:00",
        "ContactPerson": "Joe Bloggs",
        "ProjectManager": "Sally Smith",
        "Contractor": "ABC Company",
        "Works": [{
            "TypeOfWork": "scaffolding",
            "Status": "done"
        },
        {
            "TypeOfWork": "painting",
            "Status": "on-going"
        }
        ],

        "Comments": [{
            "Author": "Adele",
            "Text": "Hello."
        }, {
            "Author": "John Doe",
            "Text": "Problem detected."
        }]
    }, {
        "ProjectID": "6",
        "Name": "Scaffolding and painting.",
        "BuildingID": "222",
        "Status": "closed",
        "StartDate": "2016-12-12T00:00:00",
        "EndDate": "2016-12-14T00:00:00",
        "ContactPerson": "Joe Bloggs",
        "ProjectManager": "Sally Smith",
        "Contractor": "ABC Company",
        "Works": [{
            "TypeOfWork": "scaffolding",
            "Status": "done"
        },
        {
            "TypeOfWork": "painting",
            "Status": "on-going"
        }
        ],

        "Comments": [{
            "Author": "Adele",
            "Text": "Hello."
        }, {
            "Author": "John Doe",
            "Text": "Problem detected."
        }]
    }, {
        "ProjectID": "7",
        "Name": "Scaffolding and painting.",
        "BuildingID": "222",
        "Status": "closed",
        "StartDate": "2016-12-12T00:00:00",
        "EndDate": "2016-12-14T00:00:00",
        "ContactPerson": "Joe Bloggs",
        "ProjectManager": "Sally Smith",
        "Contractor": "ABC Company",
        "Works": [{
            "TypeOfWork": "scaffolding",
            "Status": "done"
        },
        {
            "TypeOfWork": "painting",
            "Status": "on-going"
        }
        ],

        "Comments": [{
            "Author": "Adele",
            "Text": "Hello."
        }, {
            "Author": "John Doe",
            "Text": "Problem detected."
        }]
    }, {
        "ProjectID": "8",
        "Name": "Scaffolding and painting.",
        "BuildingID": "222",
        "Status": "closed",
        "StartDate": "2016-12-12T00:00:00",
        "EndDate": "2016-12-14T00:00:00",
        "ContactPerson": "Joe Bloggs",
        "ProjectManager": "Sally Smith",
        "Contractor": "ABC Company",
        "Works": [{
            "TypeOfWork": "scaffolding",
            "Status": "done"
        },
        {
            "TypeOfWork": "painting",
            "Status": "on-going"
        }
        ],

        "Comments": [{
            "Author": "Adele",
            "Text": "Hello."
        }, {
            "Author": "John Doe",
            "Text": "Problem detected."
        }]
    }];
};