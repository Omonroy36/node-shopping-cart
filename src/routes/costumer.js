import { Router } from "express";
import { createCostumer, deleteCostumer, getCostumer, getCostumers, updateCostumer } from "../controllers/costumer.controller";
const router = Router();

router.post('/new_costumer', createCostumer);
router.get('/costumers', getCostumers);

//get,put,delete by id
router.put('/:id', updateCostumer);
router.get('/:id', getCostumer);
router.delete('/:id', deleteCostumer);



export default router;