import express from 'express';
import Controller from '../controllers/Book';
import { Schemas, ValidateSchema } from '../middleware/ValidateSchema';

const router = express.Router();

router.post(
  '/create',
  ValidateSchema(Schemas.book.create),
  Controller.createBook
);
router.get('/get/:bookId', Controller.readBook);
router.get('/get', Controller.readAll);
router.patch(
  '/update/:bookId',
  ValidateSchema(Schemas.book.update),
  Controller.updateBook
);
router.delete('/delete/:bookId', Controller.deleteBook);

export = router;
