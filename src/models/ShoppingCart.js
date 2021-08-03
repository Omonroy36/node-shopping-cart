import  Sequelize  from "sequelize";
import sequelize from "../database/database";


export const ShoppingCart = sequelize.define('shoppingcarts',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    productId: {
        type: Sequelize.INTEGER,
    },
    costumerId: {
        type: Sequelize.INTEGER,
    },
    quantity: {
        type: Sequelize.INTEGER,
    },
    price: {
        type: Sequelize.FLOAT,
    },
    billId: {
        type: Sequelize.INTEGER,
    },
}, { 
    timestamps: false,
});


