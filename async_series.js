var async = require("async");
var obj = {};
obj.getName = (callback) => {
    setTimeout(() => {
        console.log("1");
        callback(null, "Shiv");
    }, 2000);


}
obj.getAge = (callback) => {
    setTimeout(() => {
        console.log("2");
        callback(null, 23);
    }, 1000);


}
obj.getGender = (callback) => {
    setTimeout(() => {
        console.log("3");
        callback(null, "Male");
    }, 2000);


}
async.series(obj, function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data)
    }
});