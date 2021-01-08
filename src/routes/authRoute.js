import { Router } from 'express';
import { register, login } from '../controllers/authController';

const router = Router();

router.post('/u-signup', register);
router.post('/u-login', login);

export default router;
