const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const { historyApiFallback } = require('koa2-connect-history-api-fallback');

const app = new Koa()
app.use(historyApiFallback({whiteList: ['/api']}))
app.use(static(
  path.join(__dirname, './static')
))
app.listen(3000)