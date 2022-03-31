import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import apiSpec from '../swagger-doc.json';

import * as BookController from './controllers/book';
import * as UserController from './controllers/user';
import * as AuthController from './controllers/auth';
import * as PiController from './controllers/pi';

export const router = Router();

// Auth routes
router.post('/auth/login', AuthController.login);
router.post('/auth/register', AuthController.register);

// Book routes
router.post('/book/add', BookController.add);
router.get('/book/all', BookController.all);
router.get('/book/search', BookController.search);

// Pi routes
router.get('/pi/get_v4_info', PiController.get_v4_info);
router.get('/pi/get_rework_states', PiController.get_rework_states);
router.get('/pi/get_cloud_info', PiController.get_cloud_info);
router.post('/pi/do_action', PiController.do_action);

// User routes
router.get('/user/all', UserController.all);
router.get('/post/all', UserController.post);

if (process.env.NODE_ENV === 'development') {
  router.use('/dev/api-docs', swaggerUi.serve);
  router.get('/dev/api-docs', swaggerUi.setup(apiSpec));
}
