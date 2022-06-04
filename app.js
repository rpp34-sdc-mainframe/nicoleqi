var express = require('express');
const db = require('./pg')
var productRouter = require('./routes/products');
var styleRouter = require('./routes/style');
var photoRouter = require('./routes/photos.js');
var cartRouter = require('./routes/carts.js');
var featureRouter = require('./routes/features.js');
var skuRouter = require('./routes/skus.js');
var app = express();

app.use('/style', styleRouter);
app.use('/products', productRouter);
app.use('/photos', photoRouter);
app.use('/carts', cartRouter);
app.use('./features', featureRouter);
app.use('./skus', skuRouter);

var server = app.listen(8088);