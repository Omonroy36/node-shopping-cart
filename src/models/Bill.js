import  Sequelize from "sequelize";
import sequelize from "../database/database";
import { ShoppingCart } from "./ShoppingCart";

export const Bill = sequelize.define('bill',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    createdAt: {
        type: Sequelize.DATE,
    },
    totalPrice: {
        type: Sequelize.FLOAT,
    },
    status: {
        type: Sequelize.ENUM(
            'paid',
            'pending',
            'refunded'
        ),
    },
}, { 
    timestamps: false,
});

Bill.hasMany(ShoppingCart, {foreignKey:'billId', sourceKey:'id'});
ShoppingCart.belongsTo(Bill, {foreignKey:'billId', sourceKey:'id'});