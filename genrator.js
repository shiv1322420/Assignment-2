var fs = require("fs");
console.log("file record:")
function readfile(filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, function (err, data) {
            // console.log(err,data)
            if (err) {
                //console.log(err)
                reject(err);
            }
            else {
                resolve(data.toString());
            }
        });
    });
}

function* gen() {
    let a = yield readfile("inp.txt").then((data) => { console.log(data) });
    a = yield readfile("inp1.txt").then((data) => { console.log(data) });
    a = yield readfile("inp2.txt").then((data) => { console.log(data) });
}

console.log("first statement");
var v = gen();
v.next();
v.next();
v.next();
// var abc = v.next();
// setTimeout(() => {
//     console.log(abc);
// }, 10000);

console.log("last statement");
