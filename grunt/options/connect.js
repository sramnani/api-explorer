//
// Launch web server thanks to NodeJS
//

module.exports = {
    options: {
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: '127.0.0.1',
        livereload: 36729
    },
    //
    // Define a web server to test development
    //
    dev: {
        options: {
            port: 9002,
            open: true,
            base: 'src',
            middleware: function(connect, options, middlewares) {
                // configure & add middlewares:
                var serveStatic = require('serve-static');
                middlewares.unshift(
                    function(req, res, next) {
                        res.setHeader('Access-Control-Allow-Origin', '*');
                        res.setHeader('Access-Control-Allow-Methods', '*');
                        next();
                    }, 
                    connect().use('/node_modules', serveStatic('./node_modules')),
                    connect().use('/uib/template', serveStatic('./node_modules/angular-ui-bootstrap/template')),
                    serveStatic('src')
                );
                return middlewares;
            }
        }
    }
}