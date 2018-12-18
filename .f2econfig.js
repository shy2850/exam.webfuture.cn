const { argv } = process
const dev = argv[argv.length - 1] === 'dev'
module.exports = {
    livereload: dev,
    build: !dev,
    gzip: true,
    port: dev ? undefined : 80,
    host: dev ? undefined : 'exam.webfuture.cn',
    onRoute: pathname => pathname || 'index.html',
    middlewares: [
        {
            middleware: 'template'
        }
    ]
}