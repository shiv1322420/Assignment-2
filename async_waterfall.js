var async = require("async");
var arr = [];
var getName = (callback) => {
    setTimeout(() => {
        var firstname = "Shiv";
        var lasttname = "Kumar";
        callback(null, firstname, lasttname);
    }, 1000);

}
var getAge = (firstname, lastname, callback) => {
    setTimeout(() => {
        var fullname = `The full name is ${firstname} ans ${lastname} `;
        var age = 23;
        callback(null, fullname, age)
    }, 1000);


}
var getGender = (fullname, age, callback) => {
    setTimeout(() => {
        var gender = "Male";
        var detail = `${fullname} and age is ${age} and gender is ${gender} `;

        callback(null, detail);
    }, 1000);


}
arr.push(getName, getAge, getGender);
async.waterfall(arr, function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data)
    }
});






























