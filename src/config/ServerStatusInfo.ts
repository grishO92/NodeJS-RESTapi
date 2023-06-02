import { NextFunction, Request, Response } from 'express';
import Logging from '../library/Logging';

export const serverStatusInfo = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  Logging.info(
    `Incomming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`
  );
  res.on('finish', (): void => {
    Logging.info(
      `Incomming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`
    );
  });
  next();
};
