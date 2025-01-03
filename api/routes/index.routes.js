import { Router } from 'express';
import userRoutes from '../modules/users/userRoutes.js';
import authRoutes from '../modules/auth/authRoutes.js';
import productsRoutes from '../modules/products/productsRoutes.js';
import ordersRoutes from '../modules/orders/ordersRoutes.js';

const router = Router();

router.use('/users', userRoutes);
router.use('/auth', authRoutes); 
router.use('/product', productsRoutes); 
router.use('/order', ordersRoutes); 

export default router;
