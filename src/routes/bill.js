import { Router } from "express";
import { createBill, getBills,getBill,updateBill, deleteBill } from "../controllers/bill.controllers";
const router = Router();

router.post('/new_bill', createBill);
router.get('/bills', getBills);

//get,put,delete by id
router.put('/:id', updateBill);
router.get('/:id', getBill);
router.delete('/:id', deleteBill);

export default router;