import { Router } from "express";
import { createShoppingCart, updateCart, deleteCart, getCart, getCarts, getCartByCostumer} from "../controllers/shopping_cart.controller";
const router = Router();

router.post('/new_cart', createShoppingCart);
router.get('/carts', getCarts);

//get,put,delete by id
router.put('/:id', updateCart);
router.get('/:id', getCart);
router.delete('/:id', deleteCart);

//get by costumer
router.get('/costumer/:costumerId', getCartByCostumer);


export default router;