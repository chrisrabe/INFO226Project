var app = angular.module('plunker', []);

// This controller is used to switch between login page to main page
app.controller('MainCtrl', function ($scope) {

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
    setContent(4);
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
  $scope.logOut = function () {
    setContent(1);
    setView(1);
  };

  $scope.logIn = function () {
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

  $scope.validateFields = function (username, password) {
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
      $scope.setContent('view', 2);
    } else {
      $scope.feedback = "Invalid username and password";
    }
  };

  $scope.clearFields = function () {
    $scope.username = "";
    $scope.password = "";
    $scope.user = {
      login_name: "",
      password: "",
      usertype: ""
    };
  };

  // Works Checkbox control

  $scope.isDone = function (status) {
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