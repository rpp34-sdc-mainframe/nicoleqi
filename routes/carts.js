const app = require('express');
const router = app.Router();
const {Carts} = require('../db/module.js');

router.get('/', function (req, res) {
  let offset = (req.query.page - 1 ) * req.query.count;
  let limit = req.query.count;

  Carts.findAll({ offset, limit }).then(result => {
    res.status(200).json(result)
  }).catch(error => {
    res.status(200).json(error)
  })
});

router.get('/create', function (req, res) {
  Carts.create({ product_id: req.query.product_id }, { where: { id: req.query.id } }).then(result => {
      res.status(200).json(result)
  }).catch(error => {
      console.log(error)
  })
});

router.get('/update', function (req, res) {
  Carts.update({ product_id: req.query.product_id }, { where: { id: req.query.id } }).then(result => {
      res.status(200).json(result)
  }).catch(error => {
      console.log(error)
  })
});

router.get('/delete', function (req, res) {
  Carts.destory({ product_id: req.query.product_id }, { where: { id: req.query.id } }).then(result => {
      res.status(200).json(result)
  }).catch(error => {
      console.log(error)
  })
});

module.exports = router;