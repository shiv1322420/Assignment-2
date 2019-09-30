var fs = require("fs");
console.log("file record:")
function readfile(filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, function (err, data) {

            if (err) {

                reject(err);
            }
            else {
                resolve(data.toString());
            }
        });
    });
}

readfile("inp.txt").then((data) => {
    console.log(data);
    return readfile("inp1.txt")
}).then((data) => {
    console.log(data)
    return readfile("inp2.txt")
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err);
});

