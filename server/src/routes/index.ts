import { Router } from 'express';
const router = Router();

import apiRoutes from './api/index.js';
import htmlRoutes from './htmlroutes.js';

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

export default router;