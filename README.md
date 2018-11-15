# QR-code-generator

***Simply generate your QR codes***

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/sylvainSUPINTERNET/qr-code-generator/commits/master)

## Required
  <ul>
      <li>npm >= 6.4.1</li>
      <li>node > 7.6 (async / await support required)</li>
  </ul>

## Dependencies
<ul>
  <li>qr-image <a href="https://www.npmjs.com/package/qr-image">https://www.npmjs.com/package/qr-image</a></li>
</ul>


## Get started

    $ npm i @sylvainneung/qr-code-generator --save



<a href="https://www.npmjs.com/package/@sylvainneung/qr-code-generator">https://www.npmjs.com/package/@sylvainneung/qr-code-generator</a>

## Example

``` javascript
'use strict';

const qrGenerator = require('@sylvainneung/qr-code-generator');


//default directory root of your project

//Sync
qrGenerator.generateQrImage("mydata", "mypicname", "png", "my/dir/path/optional");


//Async
qrGenerator
    .generateQrImageAsync("myOtherData", "otherpic", "svg", "my/dir/path/optional")
    .then(response => {
        console.log("Data", response)
    })
    .catch(err => console.log("Err => ", err));
```


## Documentation

| Methods       | params        | description    |
| ------------- |:-------------:| :---------:|
| generateQrImageAsync     | data, picName, picType, picPath | Create new QR image asynchronous     |
| generateQrImage     | data, picName, picType, picPath   | Create new QR image synchronous


## Details params

| Params       | Type        | description    | Infos |
| ------------- |:-------------:| :---------:| :---------:|
| data     | String | qr picture data|     Numeric only    Max. 7,089 characters (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) / Alphanumeric    Max. 4,296 characters (0–9, A–Z [upper-case only], space, $, %, *, +, -, ., /, :) / Binary/byte     Max. 2,953 characters (8-bit bytes) (23624 bits)
| picName     | String  | name of your file | |
| picType     | String -> only support <code>"svg"</code> <code>"png"</code> <code>"jpeg"</code> <code>"jpg"</code>  | picture type  | |
| picPath     | String? (optional)  | folder path  | "my/folder/name" |