var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  let url =  req.url;
  
   
  if(url === "/welcome"){
    res.writeHead(200 , {"content-type":"text/plain"})
    res.write("Welcome to Dominos!")
    res.end();
  }
 else if(url==="/contact"){
    res.writeHead(200 , {"content-type":"application/json"}) 
    res.write("{ 'phone': '18602100000', 'email': 'guestcaredominos@jublfood.com'}")
       res.end();
  }
  else{
    res.writeHead(404);
    res.write("the page is not found! 404 error")
    res.end()
  }
}

module.exports = httpServer;