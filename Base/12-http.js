const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome in my web site!!!')
    }
   if(req.url === '/about'){
       res.end('About this wed site!!!')
   }
   res.end(`
       <h1>Opss!</h1>
       <p>I think you are lost</p>
       <a href='/'>Back home<a>
   `)
})

server.listen(5000)