import { Router } from 'express';
import { allHotels } from '../controllers/authController';
import { requiredLogin } from '../middlewares/required';

const router = Router();

router.get('/allhotels', requiredLogin, allHotels);

export default router;
