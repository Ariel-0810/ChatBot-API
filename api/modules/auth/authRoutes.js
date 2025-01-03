import express from 'express';
import { login } from './authController.js';
import { registerTag } from '../../../src/swagger/swaggerTags.js';

registerTag('Login', 'Ruta relacionada al login');
const router = express.Router();

router.post('/login', login);

export default router;


