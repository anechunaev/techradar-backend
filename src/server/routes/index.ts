import { Router } from 'express';
import api from './api';
import mainPage from './mainpage';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import checkApiKeys from '../modules/checkApiKeys';

const router = Router({ mergeParams: true });
const checkApiKeyHandler = checkApiKeys(JSON.parse(readFileSync(resolve('config/keys/api-keys.json'), 'utf8')));

router.all('/', mainPage);
router.use('/api', checkApiKeyHandler);
router.use('/api', api);

export default router;