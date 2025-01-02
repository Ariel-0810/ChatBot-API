import { Router } from 'express';
import { createProduct, getAllProducts, getProduct, updateProduct, deleteProduct }  from './productsControllers.js';

const router = Router();

router.post('/createProduct', createProduct);
router.get('/getAllProducts', getAllProducts);
router.get('/getProduct/:id', getProduct);
router.patch('/updateProduct/:id', updateProduct);
router.delete('/deleteProduct/:id', deleteProduct);

export default router;

