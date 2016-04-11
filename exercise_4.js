var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, 'utf8', function(err, data) {
  var num_newlines = (data.split('\n').length - 1);
  console.log(num_newlines);
});


