const _test = require('./index');

_test
    .generateQrImageAsync("my data here", "myPic", "png")
    .then(function (data) {
        console.log(data);
    })
    .catch(err => console.log(err));


console.log(_test
    .generateQrImage("other data", "mySyncPic", "png"));


