const app = require("express");
const router = app.Router();
const { Photos } = require('../db/module')

router.get("/", function (req, res) {
  let offset = (req.query.page - 1) * req.query.count;
  let limit = req.query.count;
  console.log(req.query.page);

  Photos.findAll({ offset, limit })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(200).json(error);
    });
});

router.get("/create", function (req, res) {
  Photos.create({ style_id: req.query.style_id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/update", function (req, res) {
  Photos.update(
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
  Photos.destroy({ where: { id: req.query.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
