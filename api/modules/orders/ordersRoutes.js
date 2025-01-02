import { Router } from 'express';
import { createOrder, getAllOrders, getOrder, updateOrder, deleteOrder }  from './ordersControllers.js';

const router = Router();

router.post('/createOrder', createOrder);
router.get('/getAllOrders', getAllOrders);
router.get('/getOrder/:id', getOrder);
router.patch('/updateOrder/:id', updateOrder);
router.delete('/deleteOrder/:id', deleteOrder);

export default router;

