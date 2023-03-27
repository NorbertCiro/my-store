import dotenv from 'dotenv';
dotenv.config();
import express, { Application } from 'express';
import config from './api/config'
import { createApp } from './api/config/loaders';
import { mongooseLoader } from './api/config/loaders/mongoose.loader';

const startServer: Function = () => {
  mongooseLoader(config.dbHost, config.dbName)
  const app: Application = express();
  createApp(app);

  app.get('/', (_req:any, res:any) =>{
    res.json('Hola mi server en express');
  });

  app.listen(config.port, () => {
    console.log(`Server running on: http://localhost:${config.port}`);
    console.info('HTTP server connected');
  })
    .on('error', (err) => {
      console.error('Connection failed', err.message);
      process.exit(1);
    })
}



startServer();

