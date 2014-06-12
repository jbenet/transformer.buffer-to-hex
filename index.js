var Conversion = require('transformer-conversion');
var tBuffer = require('transformer.buffer');
var tHex = require('transformer.hex');
// require any other modules you may need here.

module.exports = Conversion(tBuffer, tHex, convert);

function convert(buffer) {
  return buffer.toString('hex');
}
