import { Product } from '../models/Product';

export const createProduct = async (req, res) => {
    const {name, pricing, weight, color} = req.body;
    try {
        const newProduct = await Product.create({
            name,
            pricing,
            weight,
            color
        }, {
            fields: ["name", "pricing","weight", "color"]
        });
        if(newProduct) return res.status(200).json({
            msg:"Created",
            data: newProduct
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Error'
        })
    }
};

export const getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id);
        if(product) return res.status(200).json({
            msg:"Product",
            data: product
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Error'
        })
    }
};

export const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        if(products) return res.status(200).json({
            msg:"All products",
            data: products
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Error'
        })
    }
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const {name, pricing, weight, color} = req.body;
    try {
        const product = await Product.findByPk(id);
        if(product){
            await product.update({name, pricing, weight, color});
        };
        res.status(200).json({
            msg:"Updated",
            data:product
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Error'
        })
    }
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteRowsCount = await Product.destroy({
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
