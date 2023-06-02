import { NextFunction, Request, Response } from 'express';
import Logging from '../library/Logging';

export const errorHandler = (
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  const error = new Error('Not found!');
  Logging.error(error);

  return res.status(404).json({ message: error.message });
};
