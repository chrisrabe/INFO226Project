var app = angular.module('plunker', []);

// This controller is used to switch between login page to main page
app.controller('MainCtrl', function ($scope, $http) {
  // Scope Variables
  $scope.buildings = [];
  $scope.building = null;
  $scope.project = null;
  $scope.projects = [];
  // For editor view of project details
  $scope.statusOptions = ["done", "on-going", "scheduled", "postponed", "cancelled"];
  $scope.workOptions = ["done", "on-going"];
  $scope.comment = "";

  // Data Update Methods

  $scope.updateBuilding = function () {
    var newBuilding = $scope.building;
    updateBuilding($scope.buildings, newBuilding);
    // NOTE: Post the new building information to the server (Next Sprint)
  };
  $scope.updateProject = function () {
    var newProject = $scope.project;
    updateProject (newProject);
    $scope.projects = getProjects($scope.building);
  };

  $scope.postComment = function () {
    var user = getUser ();
    postComment ($scope.project,{Author:user.LoginName,Text:$scope.comment});
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
  $scope.toDetails = function (id) {
    setProject(id);
    $scope.project = getProject();
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
    $scope.projects = getProjects($scope.building);  // update to project list
    $scope.backToForm();
  };
  // navigates back to the building directory
  $scope.toDirectory = function () {
    toHome(isManager());
  }

  // HTTP GET AND POST PROTOCOLS

  $scope.init = function () {
    // Initialise User Data
    $scope.username = "";
    $scope.password = "";
    $http.get('https://happybuildings.sim.vuw.ac.nz/api/your_username/user_list.json').then(function success(response) { setList(response.data.users); }, function error() { console.log('error loading user list'); });
    $http.get('https://happybuildings.sim.vuw.ac.nz/api/your_username/building_dir.json').then(function success(response) { $scope.buildings = response.data.buildings; }, function error() { console.log('error loading building directory'); });
    setProjects(createProjects());
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
        $scope.toDirectory();
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
});