
var fs = require('fs');
var path = require('path');

var pathname = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(pathname, function(err, files) {
  for (var i=0; i < files.length; i++) {
    var file = files[i];
    var file_extension = path.extname(file);
    if (file_extension == extension) {
      console.log(file);
    }
  }
});
