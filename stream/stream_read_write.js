var Readable = require('stream').Readable;
var Writable = require('stream').Writable;

var readStream = new Readable();
var writeStream = new Writable();

readStream.push('I');
readStream.push('Love');
readStream.push('Imooc\n');
readStream.push(null);

writeStream.write = function(chunk,encode,cb){
	console.log(chunk.toString());
	cb();
}

readStream.pipe(writeStream);