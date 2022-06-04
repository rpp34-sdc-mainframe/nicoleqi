const db = require('../pg')
const app = require('express');
const router = app.Router();
const { Style } = require('../db/module')

router.get('/', function (req, res) {
    console.log(req.query.page)
    Style.findAll({ offset: (req.query.page - 1 ) * req.query.count, limit: req.query.count }).then(result => {
        res.status(200).json(result)
    }).catch(error => {
        console.log(error)
    })
//    let page = req.query.page === undefined ? 1 : req.query.page;
//    let count = req.query.count === undefined ? 5 : req.query.count;
//    db.queryProductPage(page, count, res);
});

router.get('/create', function (req, res) {
    Style.create({ name:req.query.name, productId: 1 }).then(result => {
        res.status(200).json(result)
    }).catch(error => {
        console.log(error)
    })


//    let page = req.query.page === undefined ? 1 : req.query.page;
//    let count = req.query.count === undefined ? 5 : req.query.count;
//    db.queryProductPage(page, count, res);
});

router.get('/update', function (req, res) {
    Style.update({ name: req.query.name, productId: 1 }, { where: { id: req.query.id } }).then(result => {
        res.status(200).json(result)
    }).catch(error => {
        console.log(error)
    })
});

router.get('/delete', function (req, res) {
    Style.destroy({ where: { id: req.query.id } }).then(result => {
        res.status(200).json(result)
    }).catch(error => {
        console.log(error)
    })

});
module.exports = router;