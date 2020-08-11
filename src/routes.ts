import express from 'express';

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();

const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

routes.post('/classes', classesControllers.store);
routes.get('/classes', classesControllers.index);

routes.post('/connections', connectionsController.store);
routes.get('/connections', connectionsController.index);

export default routes;
