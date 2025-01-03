import { Router } from 'express';
import { createProduct, getAllProducts, getProduct, updateProduct, deleteProduct }  from './productsControllers.js';
import { registerTag } from '../../../src/swagger/swaggerTags.js';

registerTag('Product', 'Todas las rutas relacionadas a los productos');
const router = Router();

router.post('/createProduct', createProduct);
router.get('/getAllProducts', getAllProducts);
router.get('/getProduct/:productId', getProduct);
router.put('/updateProduct/:productId', updateProduct);
router.delete('/deleteProduct/:productId', deleteProduct);

export default router;

