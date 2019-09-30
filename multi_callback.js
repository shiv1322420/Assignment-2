var fs = require("fs");
fs.readFile("inp.txt", function (err, data) {
    if (err) {
        return console.error(err);
    }
    else {
        fs.readFile("inp1.txt", function (err, data) {
            if (err) {
                return err;
            }
            else {
                fs.readFile('inp2.txt', function (err, data) {
                    if (err) {
                        return err;
                    }
                    else {
                        console.log(data.toString());
                    }
                });
                console.log(data.toString());
            }
        });
        console.log(data.toString());
    }
});



