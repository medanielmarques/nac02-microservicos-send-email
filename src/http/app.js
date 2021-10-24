import express from 'express';
import cors from 'cors';
import { mongoConnection } from '../db/mongo';
import { mailRoutes } from './routes';

const app = express();

mongoConnection().then(() => {
  app.use(express.json());
  app.use(cors());
  app.use(mailRoutes);
});

export { app };
