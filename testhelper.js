
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
    return [];
};