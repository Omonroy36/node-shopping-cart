import  Sequelize  from "sequelize";
import sequelize from "../database/database";
import { ShoppingCart } from "./ShoppingCart";

export const Product = sequelize.define('product',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    name: {
        type: Sequelize.STRING,
    },
    pricing: {
        type: Sequelize.FLOAT,
    },
    weight: {
        type: Sequelize.FLOAT,
    },
    color: {
        type: Sequelize.STRING,
    },
}, { 
    timestamps: false,
    tableName:"products"
});

Product.hasMany(ShoppingCart, {foreignKey:'productId', sourceKey:'id'});
ShoppingCart.belongsTo(Product, {foreignKey:'productId', sourceKey:'id'});