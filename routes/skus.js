const app = require("express");
const router = app.Router();
const { Skus } = require('../db/module')

router.get("/", function (req, res) {
  let offset = (req.query.page - 1) * req.query.count;
  let limit = req.query.count;
  console.log(req.query.page);

  Skus.findAll({ offset, limit })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(200).json(error);
    });
});

router.get("/create", function (req, res) {
  Skus.create({ style_id: req.query.style_id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/update", function (req, res) {
  Skus.update(
    { style_id: req.query.style_id  },
    { where: { id: req.query.id } }
  )
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/delete", function (req, res) {
  Skus.destroy({ where: { id: req.query.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
