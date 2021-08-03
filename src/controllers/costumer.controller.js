import { Costumer } from '../models/Costumer';

export const createCostumer = async (req, res) => {
    const {firstName, lastName, email, address} = req.body;
    try {
        const newCostumer = await Costumer.create({
            firstName,
            lastName,
            email,
            address
        }, {
            fields: ['firstName', 'lastName','email', 'address']
        });
        if(newCostumer) return res.status(200).json({
            msg:"Created",
            data: newCostumer
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Error'
        })
    }
};

export const getCostumer = async (req, res) => {
    const { id } = req.params;
    try {
        const costumer = await Costumer.findByPk(id);
        if(costumer) return res.status(200).json({
            msg:"Product",
            data: costumer
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Error'
        })
    }
};

export const getCostumers = async (req, res) => {
    try {
        const costumers = await Costumer.findAll();
        if(costumers) return res.status(200).json({
            msg:"All products",
            data: costumers
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Error'
        })
    }
};

export const updateCostumer = async (req, res) => {
    const { id } = req.params;
    const {firstName, lastName, email, address} = req.body;
    try {
        const costumer = await Costumer.findByPk(id);
        if(costumer){
            await costumer.update({firstName, lastName, email, address});
        };
        res.status(200).json({
            msg:"Updated",
            data:costumer
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Error'
        })
    }
};

export const deleteCostumer = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteRowsCount = await Costumer.destroy({
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