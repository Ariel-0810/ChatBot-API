import { Router } from 'express';
import { getAllUsers, createUser, getUserId, updateUser, deleteUser } from './userController.js';

const router = Router();

router.post('/createUser', createUser);
router.get('/getAllUsers', getAllUsers);
router.get('/getUserById/:userId', getUserId);
router.put('/updateUser/:userId', updateUser);
router.delete('/deleteUser/:userId', deleteUser);

export default router;
