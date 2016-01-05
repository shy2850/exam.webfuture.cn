exports["localhost"] = {
    root: "./",
    filter: {
        get: function(req, resp){
            var pathname = req.url.toString();
            if(pathname === '/index.html' || pathname === '/favicon.ico'){
            }else{
                resp.writeHead(302, {
                    location: '/index.html'
                });
                resp.end();
                return false;
            }
        }
    }
};
