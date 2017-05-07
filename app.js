var app = angular.module('plunker', []);

// This controller is used to switch between login page to main page
app.controller('MainCtrl', fu3nction($scope) {
  // COMMENT CHANGE

  // Functions that control views

  $scope.view = 1; // page or content
  $scope.tab = 1; // different tabs

  // switches between views
  $scope.setView = function(newView) {
    $scope.view = newView;
  };
  // returns true if the view number is equal to the current view
  $scope.viewIsSet = function(viewNum) {
    return $scope.view == viewNum;
  };
  // switches between tabs
  $scope.setTab = function(newTab) {
    $scope.tab = newTab;
  };
  // changes the view from the tab
  $scope.isSet = function(tabNum) {
    return $scope.tab == tabNum;
  };

  // Log in, Log Out

  $scope.username = "";
  $scope.password = "";

  $scope.user = {
    login_name: "",
    password: "",
    usertype: ""
  };

  // User login dummy values

  $scope.user_list = [{
    login_name: 'chris',
    password: 'password',
    usertype: 'manager'
  }, {
    login_name: 'hannah',
    password: 'password',
    usertype: 'manager'
  }, {
    login_name: 'guest',
    password: 'guest',
    usertype: 'contractor'
  }];

  // resets all the fields
  $scope.logOut = function() {
    $scope.setTab(1);
    $scope.setView(1);
  };

  $scope.logIn = function() {
    if ($scope.username == "" && $scope.password == "") {
      $scope.feedback = "Please input username and password";
    } else if ($scope.username == "") {
      $scope.feedback = "Please input username";
    } else if ($scope.password == "") {
      $scope.feedback = "Please input password";
    } else {
      $scope.feedback = "";
      $scope.validateFields($scope.username, $scope.password);
    }
  };

  $scope.validateFields = function(username, password) {
    var validLogin = false;
    var users = $scope.user_list;
    for (i = 0; i < users.length; i++) {
      var user = users[i];
      if (user.login_name == username && user.password == password) {
        validLogin = true;
        break;
      }
    }
    if (validLogin) {
      $scope.setView(2);
    }else {
      $scope.feedback = "Invalid username and password";
    }
  };

  $scope.clearFields = function() {
    $scope.username = "";
    $scope.password = "";
    $scope.user = {
      login_name: "",
      password: "",
      usertype: ""
    };
  };

  // Building Form Control

  $scope.toDetails = function() {
    $scope.pdTab = 1;
    $scope.setTab(4);
  };

  // Project Details Control

  $scope.pdTab = 1;

  $scope.setPDTab = function(newTab) {
    $scope.pdTab = newTab;
  };
  $scope.pdIsSet = function(tabNum) {
    return $scope.pdTab == tabNum;
  };
  $scope.toBuildingForm = function() {
    $scope.pdTab = 1; // reset tab
    $scope.setTab(3); // go to building form
    // should consider dummy values in sprint 2
  };

  // Works Checkbox control

  $scope.isDone = function(status) {
    return status == 'Done';
  };



  // Building Directory dummy values

  $scope.bdEntries = [{
    owner: 'Hannah',
    address: 'Kelburn'
  }, {
    owner: 'Chris',
    address: 'Upper Hutt'
  }, {
    owner: 'Hannah',
    address: 'Kelburn'
  }, {
    owner: 'Chris',
    address: 'Kelburn'
  }, {
    owner: 'Hannah',
    address: 'Kelburn'
  }, {
    owner: 'Chris',
    address: 'Kelburn'
  }];

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