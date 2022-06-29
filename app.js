var express = require('express');
var productRouter = require('./routes/products');
var app = express();
var bodyParser = require("body-parser");
const errors = require("express-async-errors");
const cors = require('cors')
app.use(cors())

app.use('/products', productRouter);

/**
 * 全局异常处理
 */
app.use((err, req, res, next) => {
  // console.log(req)
  res.status(200).json({ code: 500, msg: "server error" });
  next(err);
});


module.exports = app;

var server = app.listen(80);