const initialDbPath = './api/database.json';

const path = require('path');
const fs = require('fs');

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(initialDbPath)
const middlewares = jsonServer.defaults({
    static: "./src"
});

const port = process.env.PORT || 8088

server.use(middlewares)

server.use((req, res, next) => {
    // use originalUrl since other middleware is likely reassigning req.url
    const isApiRoute = req.originalUrl.includes('/api/');

    if (isApiRoute) return next();

    return res.sendFile(path.join(__dirname, './src/index.html'));
});

server.use(jsonServer.rewriter({
    "/api/*": "/$1"
}))

server.use(router)

server.listen(port, () => {
    console.log('JSON Server is running')
})