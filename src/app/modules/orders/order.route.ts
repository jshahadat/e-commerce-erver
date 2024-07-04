import { Router } from 'express';
import { OrderControllers } from './order.controller';

const router = Router();

router.post('/', OrderControllers.createOrder);

router.get('/', OrderControllers.getAllOrdersWithGmail);
router.get('/', OrderControllers.getAllOrders);

export const OrderRoutes = router;
