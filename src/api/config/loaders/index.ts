import { Application } from 'express';

import { expressLoader } from './express.loader';


export const createApp: Function = async (app: Application) => {
  await expressLoader(app);
  console.log('Express loaded');
}
