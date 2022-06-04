const app = require('express');
const router = app.Router();
const { Product } = require('../db/module')

router.get('/page', function (req, res) {
  let offset = (req.query.page - 1 ) * req.query.count;
  let limit = req.query.count;

  Product.findAll({ offset, limit }).then(result => {
    res.status(200).json(result)
  }).catch(error => {
    res.status(200).json(error)
  })
});

router.get('/create', function (req, res) {
  const product = {
    name: req.query.name,
    category: req.query.category,
    default_price: req.query.default_price
  }

  Product.create(product).then(result => {
      res.status(200).json(result)
  }).catch(error => {
    res.status(200).json(error)
  })
});

router.get('/update', function (req, res) {
  const product = {
    name: req.query.name,
    category: req.query.category,
    default_price: req.query.default_price
  }
  Product.update(product, { where: { id: req.query.id } }).then(result => {
      res.status(200).json(result)
  }).catch(error => {
    res.status(200).json(error)
  })
});

router.get('/delete', function (req, res) {
  Product.destroy({ where: { id: req.query.id } }).then(result => {
      res.status(200).json(result)
  }).catch(error => {
    res.status(200).json(error)
  })
});

module.exports = router;