exports["localhost"] = {
    root: "./",
    runJsBefore: false,
    filter: {
        get: function(req, resp){
            var pathname = req.url.toString();
            if(pathname.indexOf('/index.html') === 0 || pathname === '/favicon.ico'){
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
