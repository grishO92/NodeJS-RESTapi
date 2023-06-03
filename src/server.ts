import express from 'express';
import http from 'http';
import mongoose from 'mongoose';

import Logging from './library/Logging';

import { config } from './config/config';
import { serverStatusInfo } from './config/ServerStatusInfo';
import { apiRules } from './config/apiRules';
import { errorHandler } from './config/errorHandler';
import { healthCheck } from './config/healthCheck';

import authorRoutes from './routes/Author';
import bookRoutes from './routes/Book';

const router = express();

mongoose
  .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
  .then((): void => {
    Logging.info('Connected to mongoDB');
    startServer();
  })
  .catch((error): void => {
    Logging.error('Unable to connect: ');
    Logging.error(error);
  });

const startServer = (): void => {
  router.use(serverStatusInfo);

  router.use(express.urlencoded({ extended: true }));
  router.use(express.json());

  router.use(apiRules);

  /** Routes */
  router.use('/authors', authorRoutes);
  router.use('/books', bookRoutes);
  router.get('/ping', healthCheck);

  router.use(errorHandler);

  http
    .createServer(router)
    .listen(config.server.port, (): void =>
      Logging.info(`Server is running on port ${config.server.port}.`)
    );
};
