import { ShoppingCart } from '../models/ShoppingCart';

export const createShoppingCart = async (req, res) => {
    const {
        productId,
        costumerId,
        quantity,
        price,
        billId
    } = req.body;
    try {
        const newCart = await ShoppingCart.create({
            productId,
            costumerId,
            quantity,
            price,
            billId
        }, {
            fields: ["productId","costumerId","quantity","price","billId"]
        });
        if(newCart) return res.status(200).json({
            msg:"Created",
            data: newCart
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Error'
        })
    }
};

export const getCart = async (req, res) => {
    const { id } = req.params;
    try {
        const cart = await ShoppingCart.findByPk(id);
        if(cart) return res.status(200).json({
            msg:"Product",
            data: cart
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Error'
        })
    }
};

export const getCarts = async (req, res) => {
    try {
        const carts = await ShoppingCart.findAll();
        if(carts) return res.status(200).json({
            msg:"All carts",
            data: carts
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Error'
        })
    }
};

export const updateCart = async (req, res) => {
    const { id } = req.params;
    const { price , quantity } = req.body;
    try {
        const cart = await ShoppingCart.findByPk(id);
        if(cart){
            await cart.update({ price , quantity });
        };
        res.status(200).json({
            msg:"Updated",
            data:cart
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Error'
        })
    }
};

export const deleteCart = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteRowsCount = await ShoppingCart.destroy({
            where:{ id }
        });
        if(deleteRowsCount) return res.status(202).json({
            msg: "Deleted Successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Error'
        })
    }
};

export const getCartByCostumer = async (req, res) => {
    const {costumerId} = req.params;
    try {
        const costumerCart = await ShoppingCart.findAll({
            where: {costumerId}
        });
        if(costumerCart) return res.status(200).json({
            msg:'Costumer Cart',
            data: costumerCart
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Error'
        })
    }
}