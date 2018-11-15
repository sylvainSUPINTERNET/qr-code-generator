'use strict';
/**
 * Node API
 */
const fs = require('fs');
const path = require('path');

/**
 * Dependencies
 */
const qr = require('qr-image');


/**
 * For Asynchronous test
 * @param data
 * @param picName
 * @param picType
 * @param picPath (optional, default project root)
 * @returns {Promise<any>}
 * @private
 */
function _promise(data, picName, picType, picPath) {
    return new Promise((resolve, reject) => {
        if (data && picType && picName) {
            if (typeof picName !== 'string') {
                reject("Err : picName is not a string. Expected string type.")
            }
            if (typeof data !== 'string') {
                reject("Err : data parameter is not string. Expected string type.");
            } else {
                if (typeof picType === 'string') {
                    if (picType === "svg" || picType === "png" || picType === "jpg" || picType === "jpeg") {

                        let pathP = "";
                        if(picPath){
                            if(picPath.length > 0){
                                if(typeof picPath === "string"){
                                    if(fs.existsSync(picPath)){
                                        pathP = `${__dirname}/${picPath}/`
                                    } else {
                                        reject("Err : picPath => dir doesn't exist, (root project path used)");
                                    }
                                } else {
                                    reject("Err : picPath parameter is not a string. Expected string")
                                }
                            } else {
                                    reject("Err : picPath parameter is null. Expected string not null")
                            }
                        } else {
                            //default
                            pathP = `${__dirname}/`;
                        }


                        let qr_pic =
                            qr
                                .image(data, {type: picType});
                        let stream = qr_pic.pipe(fs.createWriteStream(`${pathP}${picName}.${picType}`));

                        stream.on('finish', function () {
                            let response = {
                                error: null,
                                pic_path: path.resolve(`${picName}.${picType}`),
                                data: " -- qr image generate successfully --"
                            };
                            resolve(response);
                        });

                        stream.on('error', function (err) {
                            let error = {
                                error: true,
                                pic_path: path.resolve(`${picName}.${picType}`),
                                data: err
                            };
                            reject(error);
                        });

                    } else {
                        reject("Err : only png / jpeg / jpg / svg are supported.");
                    }
                } else {
                    reject("Err : data parameter is not string. Expected string type.");
                }
            }
        } else {
            reject("Err : data/name/type missing. Expected string.");
        }
    })
}

/**
 * Asynchronous qr image generation
 * @param data
 * @param picName
 * @param picType
 * @param picPath (optional, default project root)
 * @returns {Promise<void>}
 */
async function generateQrImageAsync(data, picName, picType, picPath) {
    const generate_data = await _promise(data, picName, picType, picPath);
    return generate_data;
}

/**
 * Synchronous qr image generate
 * @param data
 * @param picName
 * @param picType
 * @param picPath (optional, default project root)
 * @return {Object} response from generation action
 */
function generateQrImage(data, picName, picType, picPath) {

    let pathP = "";
    if(picPath){
        if(picPath.length > 0){
            if(typeof picPath === "string"){
                if(fs.existsSync(picPath)){
                    pathP = `${__dirname}/${picPath}/`
                } else {
                    console.log("Err : picPath dir doesn't exist ! (root project path used)");
                }
            } else {
                console.log("Err : picPath parameter is not a string. Expected string")
            }
        } else {
            console.log("Err : picPath parameter is null. Expected string not null")
        }
    } else {
        //default
        pathP = `${__dirname}/`;
    }

    let qr_pic =
        qr
            .image(data, {type: picType});
    let stream = qr_pic.pipe(fs.createWriteStream(`${pathP}${picName}.${picType}`));
    return stream;
}


module.exports.generateQrImageAsync = generateQrImageAsync;
module.exports.generateQrImage = generateQrImage;



