const { sequelize } = require("./sequelize");
const { DataTypes, Model } = require("sequelize");

class Product extends Model {}
Product.init(
  {
    name: DataTypes.TEXT,
    slogan: DataTypes.TEXT,
    description: DataTypes.TEXT,
    category: DataTypes.TEXT,
    default_price: DataTypes.INTEGER,
  },
  { sequelize, tableName: "Products", timestamps: false }
);

class feature extends Model {}
feature.init(
  {
    product_id: DataTypes.INTEGER,
    feature: DataTypes.TEXT,
    value: DataTypes.TEXT,
  },
  { sequelize, tableName: "Features", timestamps: false }
);

Product.hasMany(feature, { foreignKey: "product_id" });
feature.belongsTo(Product, { foreignKey: "product_id" });

class Style extends Model {}
Style.init(
  {
    productId: DataTypes.INTEGER,
    name: DataTypes.TEXT,
    sale_price: DataTypes.INTEGER,
    original_price: DataTypes.INTEGER,
    default_style: DataTypes.INTEGER,
  },
  { sequelize, tableName: "Styles", timestamps: false }
);

class sku extends Model {}
sku.init(
  {
    style_id: DataTypes.INTEGER,
    size: DataTypes.TEXT,
    quantity: DataTypes.INTEGER,
  },
  { sequelize, tableName: "Skus", timestamps: false }
);

Style.hasMany(sku, { foreignKey: "style_id" });
sku.belongsTo(Style, { foreignKey: "style_id" });

class photo extends Model {}
photo.init(
  {
    styleId: DataTypes.INTEGER,
    url: DataTypes.TEXT,
    thumbnail_url: DataTypes.TEXT
  },
  { sequelize, tableName: "Photos", timestamps: false }
);

Style.hasMany(photo, { foreignKey: "styleId" });
photo.belongsTo(Style, { as: 'photos', foreignKey: "styleId" });

class Related extends Model {}
Related.init(
  {
    current_product_id: DataTypes.INTEGER,
    related_product_id: DataTypes.INTEGER,
  },
  { sequelize, tableName: "Related", timestamps: false }
);

class Cart extends Model {}
Cart.init(
  {
    user_session: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    active: DataTypes.INTEGER,
  },
  { sequelize, tableName: "Carts", timestamps: false }
);

sequelize.sync({ alter: true });

module.exports = {
  Product,
  feature,
  Style,
  sku,
  photo,
  Related,
  Cart,
};

