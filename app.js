var app = angular.module('plunker', []);

// This controller is used to switch between login page to main page
app.controller('MainCtrl', function ($scope, $http) {
  //Scope Variables
  $scope.buildings = [];
  $scope.building = null;
  $scope.project = null;

  // Data Update Methods

  $scope.updateBuilding = function () {
    var newBuilding = $scope.building;
    updateBuilding($scope.buildings, newBuilding);
    // NOTE: Post the new building information to the server (Next Sprint)
  };

  // Navigation functions of scope

  // Changes the type's content
  // If type is equal to "view", then it changes the web page
  // If type is equal to "content", then it changes the content page tabs
  // If type is equal to "project", then it changes the project details tab
  $scope.setContent = function (type, newContent) {
    if (type == 'view') {
      setView(newContent);
    } else if (type == 'content') {
      setContent(newContent);
    } else if (type == 'project') {
      setTab(newContent);
    }
  };

  // Returns true if tabNumber is equal to the currently set tab
  // If type is equal to "view", then it checks the web page tab
  // If type is equal to "content", then it checks the content page tab
  // If type is equal to "project", then it checks the project details tab
  $scope.isSet = function (type, tabNum) {
    if (type == 'view') {
      return getView() == tabNum;
    } else if (type == 'content') {
      return getContent() == tabNum;
    } else if (type == 'project') {
      return getTab() == tabNum;
    }
  };

  // goes to project details
  $scope.toDetails = function () {
    setTab(1);
    if (isManager()) {
      setContent(6);
    } else {
      setContent(4);
    }
  };

  // goes back to the building form
  $scope.backToForm = function () {
    if (isManager()) {
      $scope.setContent('content', 5); // change the view to building form editor
    } else {
      $scope.setContent('content', 3); // change the view to building form
    }
  };

  // navigates to the building form with the specified id
  $scope.toForm = function (id) {
    setBuilding($scope.buildings, id);
    $scope.building = getBuilding(); // change the data inside the building form
    // Need to add update to project list
    $scope.backToForm();
  };

  // HTTP GET AND POST PROTOCOLS

  $scope.init = function () {
    // Initialise User Data
    $scope.username = "";
    $scope.password = "";
    $http.get('https://happybuildings.sim.vuw.ac.nz/api/your_username/user_list.json').then(function success(response) { setList(response.data.users); }, function error() { console.log('error loading user list'); });
    $http.get('https://happybuildings.sim.vuw.ac.nz/api/your_username/building_dir.json').then(function success(response) { $scope.buildings = response.data.buildings; }, function error() { console.log('error loading building directory'); });
  };

  // LOGIN PAGE METHODS

  // resets all the fields
  $scope.logOut = function () {
    $scope.clearFields();
    setContent(1);
    setView(1);
  };
  // verifies the username and password to the server
  $scope.logIn = function () {
    if ($scope.username == "" && $scope.password == "") {
      $scope.feedback = "Please input username and password";
    } else if ($scope.username == "") {
      $scope.feedback = "Please input username";
    } else if ($scope.password == "") {
      $scope.feedback = "Please input password";
    } else {
      $scope.feedback = "";
      if (authenticate($scope.username, $scope.password)) {
        setUser($scope.username);
        $scope.setContent('view', 2);
      } else {
        $scope.feedback = "Invalid username and password";
      }
    }
  };
  // resets all the fields
  $scope.clearFields = function () {
    $scope.username = "";
    $scope.password = "";
    $scope.feedback = "";
    setUser(null);
  };

  // Works Checkbox control

  $scope.isDone = function (status) {
    return status.toLowerCase() == 'done';
  };

  // Building Form Dummy Value
  $scope.bfEntries = [{
    id: '1',
    name: 'Scaffolding and Painting',
    schedule: 'dd/mm/yyyy'
  }, {
    id: '2',
    name: 'Roof Construction',
    schedule: 'dd/mm/yyyy'
  }, {
    id: '3',
    name: 'Wall Construction',
    schedule: 'dd/mm/yyyy'
  }, {
    id: '4',
    name: 'Window Installation',
    schedule: 'dd/mm/yyyy'
  }, {
    id: '5',
    name: 'Plumbing',
    schedule: 'dd/mm/yyyy'
  }];

  // Works Dummy Values
  $scope.works = [{
    type: 'Scaffolding',
    status: 'Done'
  }, {
    type: 'Painting',
    status: 'On-Going'
  }];

  // Comments dummy values
  $scope.comments = [{
    author: 'Adele',
    text: 'Hello from the other side'
  }, {
    author: 'Adele',
    text: 'I must have called a thousand times'
  }, {
    author: 'Adele',
    text: 'To tell you I\'m sorry for everything that I\'ve done'
  }, {
    author: 'Adele',
    text: 'But when I call you never seem to be home'
  }, {
    author: 'Adele',
    text: 'Hello from the outside'
  }, {
    author: 'Adele',
    text: 'At least I can say that I\'ve tried'
  }, {
    author: 'Adele',
    text: 'To tell you I\'m sorry for breaking your heart'
  }, {
    author: 'Adele',
    text: 'But it don\'t matter. It clearly doesn\'t tear you apart anymore'
  }, {
    author: 'Chris',
    text: 'OMG SHUT UP ADELE'
  }];
});