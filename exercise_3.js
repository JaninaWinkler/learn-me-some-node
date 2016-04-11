var fs = require('fs');

var num_newlines = (fs.readFileSync(process.argv[2]).toString().split('\n').length - 1);
console.log(num_newlines);
