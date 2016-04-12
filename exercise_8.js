require('http').get(process.argv[2], function(stream) {
  stream.setEncoding('utf8');
  all_data = '';
  stream.on('data', function(data) { 
    all_data += data 
  });
  stream.on('error', console.error);
  stream.on('end', function(){
    console.log(all_data.length + '\n' + all_data);
  });
});