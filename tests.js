const _test = require('./index');

//Asynchronous
 _test
    .generateQrImageAsync("my data here", "myPic", "png")
    .then(function (data) {
        console.log("Async > ", data)
    })
    .catch(err =>
        console.log("err", err)
    );



//Synchronous
 _test.generateQrImage("other data", "mySyncPic", "png");


