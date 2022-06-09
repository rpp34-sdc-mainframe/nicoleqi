var express = require('express');
var productRouter = require('./routes/products');
var cartRouter = require('./routes/carts');
var app = express();
var bodyParser = require("body-parser");
const errors = require("express-async-errors");

app.use('/products', productRouter);
app.use('/carts', bodyParser.json(), cartRouter);

/**
 * 全局异常处理
 */
app.use((err, req, res, next) => {
  // console.log(req)
  res.status(200).json({ code: 500, msg: "server error" });
  next(err);
});


module.exports = app;

var server = app.listen(8088);