import { NextFunction, Request, Response } from 'express';

export const healthCheck = (
  req: Request,
  res: Response,
  next: NextFunction
): Response => res.status(200).json({ message: 'pong' });
