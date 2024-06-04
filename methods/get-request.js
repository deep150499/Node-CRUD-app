module.exports = (req,res) => {
    let baseUrl = req.url.substring(0,req.url.lastIndexOf('/') + 1);
    console.log(baseUrl);
    if(req.url == '/api/movies'){
        res.statusCode = 200;
        res.setHeader('Content-type','application/json');
        res.write(JSON.stringify(req.movies));
        res.end();
    }
    else{
        res.writeHead(404,{'Content-type':'application/json'});
        res.end(JSON.stringify({
            title : 'Not Found',
            message : 'Route not found'}));
    }
}