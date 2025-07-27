import { Router } from 'express';
import { getDeviceSavings } from '../controllers/savingsController';

const router = Router();

router.get('/', getDeviceSavings);

export default router;
