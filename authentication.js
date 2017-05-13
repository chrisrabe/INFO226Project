// This script file contains all the user and password verification functions

var globalUser = null;
var user_list = [];

// Getters and Setters

var getUser = function () {
    return user;
};

var getList = function () {
    return user_list;
};

var setUser = function (username) {
    if (username == null) {
        globalUser = username;
        return;
    }
    for (i = 0; i < user_list.length; i++) {
        var user = user_list[i];
        if (user.LoginName == username) {
            globalUser = user;
            break;
        }
    }
};

var setList = function (newList) {
    user_list = newList;
};

// Verification Methods

var isManager = function () {
    if (globalUser == null) {
        return false;
    }
    return globalUser.UserType == 'manager';
};

var authenticate = function (username, password) {
    var valid = false;
    for (i = 0; i < user_list.length; i++) {
        var user = user_list[i];
        if (user.LoginName == username && user.Password == password) {
            valid = true;
            break;
        }
    }
    return valid;
};
