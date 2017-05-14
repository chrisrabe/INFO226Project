// This javascript file is responsible for navigating between tabs
// Contains variables for view, tab and project details tab

// indices for tab / view changes
var view = 1; // web page views
var content = 1; // content page tabs
var tab = 1; // project details tab

var setView = function (newView) {
    view = newView;
};

var getView = function () {
    return view;
};

var setContent = function (newContent) {
    content = newContent;
};

var getContent = function () {
    return content;
};

var setTab = function (newTab) {
    tab = newTab;
};

var getTab = function () {
    return tab;
};

var toHome = function (isManager) {
    if (isManager) {
        setContent(7);
    } else {
        setContent(1);
    }
    setView(2);
};