http = require('http')
urls = process.argv.slice(2)
returned = [] // parallel array tracking stream 'end' events
urls.forEach(function(){returned.push(false)})
urls.forEach(function(url, i){
  http.get(url, function(stream){
    stream.setEncoding('utf8')
    urls[i] = '' // reuse rather than garbage collect this array #performance
    stream.on('data', function(data){
      urls[i] += data
    })
    stream.on('end', function(){
      returned[i] = true
      if(returned.reduce(function(a,b){return a && b}))
        urls.forEach(function(res){console.log(res)})
    })
    stream.on('error', function(e){console.error(e)})
  })
})


