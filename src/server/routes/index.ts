import { Router } from 'express';
import api from './api';
import mainPage from './mainpage';

const router = Router({ mergeParams: true });

router.all('/', mainPage);
router.use('/api', api);

export default router;