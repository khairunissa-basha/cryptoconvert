var wif = require('wif')
var privateKey = Buffer.from('L4hKjb1zfSyaYTRnEiF4jH7SMrmu8ojzq9vBCXPTcKN7SBM5PUFX', 'hex')
var key = wif.encode(128, privateKey, true) // for the testnet use: wif.encode(239, ...
// => KwDiBf89QgGbjEhKnhXJuH7LrciVrZi3qYjgd9M7rFU73sVHnoWn
//var key = wif.encode(239, privateKey, true)
console.log(key);
var obj = wif.decode(key)
// => {
//	version: 128,
//	privateKey: <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01>,
//	compressed: true
//}

wif.decode(key, 0x09)
// => Error: Invalid network version

// alternative syntax
wif.encode(obj)
// => KwDiBf89QgGbjEhKnhXJuH7LrciVrZi3qYjgd9M7rFU73sVHnoWn
console.log(obj)