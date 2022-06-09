const app = require('express');
const router = app.Router();
const { Skus, Carts} = require('../db/module');

router.get('/', function (req, res) {
  let offset = (req.query.page - 1 ) * req.query.count;
  let limit = req.query.count;

  Carts.findAll({ offset, limit }).then(result => {
    res.status(200).json(result)
  }).catch(error => {
    res.status(200).json(error)
  })
});

router.post('/', function (req, res) {
  Skus.findAll({ where: { id: req.body.sku_id } }).then(sku => {
    Carts.create({ product_id: sku.product_id } ).then(result => {
      res.status(200).json(result)
    }).catch(error => {
      console.log(error)
      res.status(200).json(error)
    });
  });
});

module.exports = router;