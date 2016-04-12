moment = require('moment')
require('net').createServer(function(socket){
  socket.end(moment().format('YYYY-MM-DD HH:mm') + '\n')
}).listen(8000)