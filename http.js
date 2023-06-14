const http=require('http')

const server=http.createServer((req,res)=>{
    if(req==='/'){
        res.end('welcome to our home page')
    }

    if(req.url==='/about'){
        res.end('here is our some about')
    }

    res.end(
        `<h1>Oops!</h1>
        <p>we can't see any page</p>
        <a href="/"> back home</a>`
    )
})


server.listen(5000)