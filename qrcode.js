/*
*copyright Ryan Day 2012
*
* Licensed under the MIT license:
*   http://www.opensource.org/licenses/mit-license.php
*
* this is the main server side application file for node-qrcode.
* these exports use serverside canvas api methods for file IO and buffers
*
*/

var QRCodeLib = require(__dirname+'/lib/qrcode-draw')
, terminalRender = require(__dirname+'/lib/termialrender.js');

var QRCodeDraw = QRCodeLib.QRCodeDraw,
  QRCode = QRCodeLib.QRCode;

//EXPORTS

//
// breaking change to 0.1 this used to be an instance. now it returns the constructor.
//
exports.QRCodeDraw = QRCodeDraw;

//
// export error correct levels.
//
exports.errorCorrectLevels = QRCodeLib.QRErrorCorrectLevel;

//
// export original canvas to be used with draw method, esp. Canvas.Image
//
// exports.canvas=Canvas;

/*
* provide an api to return the max characters allowed for given dimensions, and miniumum error correction level
* the qr code library will always use the maximum error correction level for the given numbar of chars constrained by size
*/
exports.getMaxChars = function(minErrorCorrectionLevel,width,moduleScale){
	//TODO THIS NEEDS TO WORK
  console.log('this doesnt work yet. comming soon =)');
};

var parseOptions = function(options) {
  var textKeys = {'minimum':"L",'medium':"M",'high':"Q",'max':"H"}
	if(options.errorCorrectLevel) {
    var ec = options.errorCorrectLevel;
    if(textKeys[ec]){
      options.errorCorrectLevel = textKeys[ec];
    }
  }
  return options;
};


//
// draw qr in your terminal!
//
exports.drawText = function(text,options,cb){

  if(typeof options == 'function'){
    cb = options;
    options = {};
  }
  options = parseOptions(options);

  var drawInstance = new QRCodeDraw();
  drawInstance.drawBitArray(text, /*options,*/ function(error,bits,width){
    if (!error) {
      var code = terminalRender.renderBits(bits,width);
      cb(error,code);
    } else {
      cb(error,null);
    }
  });
}

