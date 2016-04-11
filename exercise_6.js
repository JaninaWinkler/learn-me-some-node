// var mymodule = require ('./module.js');

// mymodule(process.argv[2], process.argv[3], function(error, files_to_output) {
//   if(error) console.log(error);
//   else files_to_output.forEach(function(file) { console.log(file )});
// });

var mymodule = require('./module.js');

mymodule(process.argv[2], process.argv[3],
  function(error, files_to_output){
    if(error) 
      return console.error("There was an error:", error);
    else 
      files_to_output.forEach(function(file){ console.log(file) });
  }
)