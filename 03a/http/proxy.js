const express = require("express");
/**
 * http-proxy-middleware
 * 0.*.*版本引用
 * const proxy = require('http-proxy-middleware');
 * 1.*.*版本引用
 * const { createProxyMiddleware } = require("http-proxy-middleware");
 */
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
const exampleProxy = createProxyMiddleware({
  target: "http://localhost:4000",
  changeOrigin: false
});
app.use(express.static(__dirname + "/"));
app.use("/api", exampleProxy);

app.listen(3000);
