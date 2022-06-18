const {
  Product,
  feature,
  Style,
  sku,
  photo,
  Related,
} = require("../db/module");
const app = require("express");

const router = app.Router();

/**
 * 分页查询商品
 */
router.get("/", async function (req, res) {
  let offset = parseInt(req.query.page);
  let limit = parseInt(req.query.count);
  if (isNaN(offset) || offset === 0) {
    offset = 1;
  }
  if (isNaN(limit) || limit === 0) {
    limit = 10;
  }
  const where = {
    offset: (offset - 1) * limit,
    limit: limit,
    include: {
      model: feature,
    },
  };
  // 跳过offset个实例,然后获取limit个实例
  const products = await Product.findAll(where);
  res.status(200).json(products);
});

/**
 * 查询商品详情
 */
router.get("/:product_id", async function (req, res) {
  const where = {
    where: { id: req.params.product_id },
    include: {
      model: feature,
    },
  };
  const products = await Product.findOne(where);
  res.status(200).json(products);
});

/**
 * 查询商品样式详情
 */
router.get("/:product_id/styles", async function (req, res) {
  const where = {
    where: { productId: req.params.product_id },
    include: [{ model: photo }, { model: sku }],
  };
  const styles = await Style.findAll(where);
  res.status(200).json(styles);
});

/**
 * 查询商品相关的商品ID
 */
router.get("/:product_id/related", async function (req, res) {
  // throw new Error('error')
  // try {
  //   throw new Error('error')
  const where = {
    attributes: ["related_product_id"],
    where: { current_product_id: req.params.product_id },
  };
  const related = await Related.findAll(where);
  var relatedArr = new Array();
  if (related !== null) {
    related.forEach((item) => {
      relatedArr.push(item.related_product_id);
    });
  }
  res.status(200).json(relatedArr);
  // } catch(e) {
  //   res.status(200).json({ code: 500, msg: "服务器内部异常" });
  // }
});

module.exports = router;
