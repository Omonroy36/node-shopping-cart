import { Router } from "express";
import { createProduct, deleteProduct, getProducts, updateProduct, getProduct } from "../controllers/product.controller";
const router = Router();

router.post('/new_product', createProduct);
router.get('/products', getProducts);

//get,put,delete by id
router.put('/:id', updateProduct);
router.get('/:id', getProduct);
router.delete('/:id', deleteProduct);

export default router;