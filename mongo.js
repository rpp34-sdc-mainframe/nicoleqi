const sku = new Schema({
  id: Number,
  quantity:Number,
  size:String
})

const photo = new Schema({
  id:Number,
  thumbnail_url: String,
  url: String
})

const feature = new Schema({
  feature_id: Number,
  feature:String,
  value:String,

})

const style = new Schema({
  style_id: Number,
  name: String,
  original_price:String,
  sale_price:String,
  "default?": Boolean,
  photos:[photo],
  skus:[sku]
})

const product = new Schema({m
  product_id: Number,
  name:String,
  slogan:String,
  description:String,
  category:String,
  default_prict:String,
  features: [feature],
  styles:{
    results:[style]
  },
  related:[Number]
});

