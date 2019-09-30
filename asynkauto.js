var async = require('async');
async.auto({
    getName: function (callback) {
        var name = "Shiv";
        callback(null, name);
    },
    getAge: function (callback) {
        var age = 23;
        callback(null, age);
    },
    getDetail: ['getName', 'getAge', function (result, callback) {
        var gender = "male"
        var detail = `the name is ${result.getName} and age is ${result.getAge} and gender is ${gender}`;
        callback(null, detail);
    }],

}, function (err, results) {
    console.log('err = ', err);
    console.log('results = ', results);
});