const { sequelize } = require("./sequelize");
const { DataTypes, Model } = require("sequelize");

class Style extends Model {}
Style.init(
  {
    productId: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    sale_price: {
      type: DataTypes.INTEGER,
    },
    original_price: {
      type: DataTypes.INTEGER,
    },
    default_style: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "Styles",
    // createAt: false,
    // updateAt: false,
    timestamps: false,
  }
);

class Product extends Model {}
Product.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    slogan: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
    category: {
      type: DataTypes.TEXT,
    },
    default_price: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "Products",
    createAt: false,
    updateAt: false,
    timestamps: false,
  }
);

class Photos extends Model {}
Photos.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    styleId: DataTypes.TEXT,
    url: DataTypes.TEXT,
    thumbnail_url: DataTypes.TEXT,
  },
  {
    sequelize,
    modelName: "Photos",
    createAt: false,
    updateAt: false,
    timestamps: false
  }
);

class Carts extends Model {}
Style.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_session: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    active: {
      type: DataTypes.INTEGER,
    }
  },
  {
    sequelize,
    modelName: "Carts",
    createAt: false,
    updateAt: false,
    timestamps: false,
  }
);

class Features extends Model {}
Product.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    feature: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    value: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: "Features",
    createAt: false,
    updateAt: false,
    timestamps: false,
  }
);

class Skus extends Model {}
Product.init(
  {
    style_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    size: {
      type: DataTypes.TEXT
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "Skus",
    createAt: false,
    updateAt: false,
    timestamps: false,
  }
);


sequelize.sync();

module.exports = {
  Style,
  Product,
  Photos,
  Carts,
  Features,
  Skus
};
