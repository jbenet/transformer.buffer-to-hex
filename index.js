var transformer = require('dat-transformer');
var tBuffer = transformer('buffer');
var tHex = transformer('hex');
// require any other modules you may need here.

module.exports = transformer.Conversion(tBuffer, tHex, convert);

function convert(buffer) {
  return buffer.toString('hex');
}
