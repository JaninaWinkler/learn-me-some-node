module.exports = function(pathname, extension, callback){
  var fs = require('fs');

    fs.readdir(pathname, function(error, files){
    var files_to_ouput = [];
    if(error) return callback(error);

    for(var i=0; i < files.length; i++){
      var extension_of_file = files[i].lastIndexOf('.') + 1;
      if(!extension_of_file) continue

      if(extension == files[i].slice(extension_of_file))
        files_to_ouput.push(files[i]);
    }
    callback(null, files_to_ouput);
  })
}