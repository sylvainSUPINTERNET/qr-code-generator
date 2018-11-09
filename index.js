'use strict';
/**
 * Node API
 */
const fs = require('fs');

/**
 * Dependencies
 */
const qr = require('qr-image');

/**
 * Reference color for console output
 */
const color_reference = {
    FgRed : "\x1b[31m"
};

module.exports = {

    /**
     *
     * @param {string} type : Type of your picture
     * @param {number, string} data : Your qr code data (cast to string)
     */
	generate: function(type, data){
        console.log("TYPE : ", type);
        console.log("DATA :", data);
        console.log("running test.");


        if(data && type){
            let dataStr;
            if(typeof data !== 'string'){
                if(typeof data === 'number'){
                    dataStr = data.toString();

                    // TODO check picture format -> only SVG, PNG, JPEG, JPG are accepted

                    /*
                    let qr_pic = qr.image(dataStr, { type: type });
                    qr_pic.pipe(fs.createWriteStream('i_love_qr.svg'))
                    */

                } else {
                    console.error("Invalid type for data argument !");
                    console.log(color_reference.FgRed);
                    console.error(` > type : string / number expected`);
                    console.error(` > type : ${typeof type} given`);
                    process.exit(1);
                }
            }
		} else {
            console.log(color_reference.FgRed);
            console.error(`Missing argument in generate method : function generate(string, string){} expected`);
            console.error(` > type : ${type} given`);
            console.error(` > data : ${data} given`);
            process.exit(1);
		}





	}
};




