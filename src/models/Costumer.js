import  Sequelize from "sequelize";
import sequelize from "../database/database";
import { ShoppingCart } from "./ShoppingCart";

export const Costumer = sequelize.define('costumer',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    firstName: {
        type: Sequelize.STRING,
    },
    lastName: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    address: {
        type: Sequelize.STRING,
    },
}, { 
    timestamps: false,
});

Costumer.hasMany(ShoppingCart, {foreignKey:'costumerId', sourceKey:'id'});
ShoppingCart.belongsTo(Costumer, {foreignKey:'costumerId', sourceKey:'id'});
