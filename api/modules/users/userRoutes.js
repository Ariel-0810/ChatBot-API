import { Router } from 'express';
import { getAllUsers, createUser, getUserId, updateUser, deleteUser } from './userController.js';
import { registerTag } from '../../../src/swagger/swaggerTags.js';

registerTag('User', 'Todas las rutas relacionadas al usuario');
const router = Router();

router.post('/createUser', createUser);
router.get('/getAllUsers', getAllUsers);
router.get('/getUserById/:userId', getUserId);
router.put('/updateUser/:userId', updateUser);
router.delete('/deleteUser/:userId', deleteUser);

export default router;
