var QRCode = require('../qrcode');

QRCode.drawText('Hello, World!', function(err,url){
    console.log(url);
});