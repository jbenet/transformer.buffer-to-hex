# transformer.buffer-to-hex

[Transformer](http://github.com/jbenet/transformer) conversion: buffer to hex

This module is a transformer conversion, published on npm. Read more about transformer at:

- the transformer website: <http://transform.datadex.io>
- the transformer repository: <http://github.com/jbenet/transformer>

## Usage

Use this module through transformer.


### Javascript

```js
var transformer = require('dat-transformer');
var tBufferToHex = transformer('buffer', 'hex');
tBufferToHex(new Buffer('beep boop', 'ascii')); // '6265657020626f6f70'
```
