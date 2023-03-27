import { Application, Router } from "express";

import config from '../config';
import { router as productsRouter } from './products.router';
import { router as usersRouter } from './users.router';

export const routerApi = (app: Application) => {
  const router = Router();
  app.use(config.api.prefix, router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
}
