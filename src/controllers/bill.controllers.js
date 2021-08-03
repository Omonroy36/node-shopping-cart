import {Bill} from '../models/Bill';

export const createBill = async (req, res) => {
    const {createdAt, totalPrice, status} = req.body;
    try {
        const newBill = await Bill.create({
            createdAt,
            totalPrice,
            status
        }, {
            fields: ['createdAt', 'totalPrice','status']
        });
        if(newBill) return res.status(200).json({
            msg:"Created",
            data: newBill
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Error'
        })
    }
};

export const getBill = async (req, res) => {
    const { id } = req.params;
    try {
        const bill = await Bill.findByPk(id);
        if(product) return res.status(200).json({
            msg:"Bill",
            data: bill
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Error'
        })
    }
};

export const getBills = async (req, res) => {
    try {
        const bills = await Bill.findAll();
        if(bills) return res.status(200).json({
            msg:"All Bills",
            data: bills
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Error'
        })
    }
};

export const updateBill = async (req, res) => {
    const { id } = req.params;
    const {createdAt, totalPrice, status} = req.body;
    try {
        const bill = await Bill.findByPk(id);
        if(bill){
            await bill.update({createdAt, totalPrice, status});
        };
        res.status(200).json({
            msg:"Updated",
            data:bill
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Error'
        })
    }
};

export const deleteBill = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteRowsCount = await Bill.destroy({
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