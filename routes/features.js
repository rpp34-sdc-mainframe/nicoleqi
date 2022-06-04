const app = require("express");
const router = app.Router();
const {Features} = require('../db/module,js');

router.get('/all', function (req, res) {
  let offset = (req.query.page - 1 ) * req.query.count;
  let limit = req.query.count;

  Features.findAll({ offset, limit }).then(result => {
    res.status(200).json(result)
  }).catch(error => {
    res.status(200).json(error)
  })
});

router.get('/create', function (req, res) {
  const item = {
    product_id: req.query.product_id,
    feature: req.query.feature,
  }

  Features.create(item).then(result => {
      res.status(200).json(result)
  }).catch(error => {
    res.status(200).json(error)
  })
});

router.get('/update', function (req, res) {
  const item = {
    product_id: req.query.product_id,
    feature: req.query.feature,
  }
  Features.update(item, { where: { id: req.query.id } }).then(result => {
      res.status(200).json(result)
  }).catch(error => {
    res.status(200).json(error)
  })
});

router.get('/delete', function (req, res) {
  Features.destroy({ where: { id: req.query.id } }).then(result => {
      res.status(200).json(result)
  }).catch(error => {
    res.status(200).json(error)
  })
});

module.exports = router;