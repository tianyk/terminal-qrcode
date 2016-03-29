## Deprecated
Please use [qrcode-terminal](github.com/gtanner/qrcode-terminal).


### Forked from [soldair/node-qrcode](https://github.com/soldair/node-qrcode), remove canvas module only support draw in your terminal.

terminal-qrcode
=

Examples
--------
A simple server side test...
```javascript
var QRCode = require('terminal-qrcode');
    
QRCode.drawText('i am a pony!',function(err, qrcode) {
    if (!err) console.log(qrcode);
});
```
