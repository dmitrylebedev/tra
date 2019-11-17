const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./api/db.json')
const middlewares = jsonServer.defaults()

const port = 4000

server.use(middlewares)
server.use(jsonServer.rewriter({
  '/api/*': '/$1',
}))
server.use(router)
server.listen(port, () => {
  console.warn('JSON Server is running on: %o', port)
})
