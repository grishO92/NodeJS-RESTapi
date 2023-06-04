import express from 'express';
import Controller from '../controllers/Author';
import { Schemas, ValidateSchema } from '../middleware/ValidateSchema';

const router = express.Router();

router.post(
  '/create',
  ValidateSchema(Schemas.author.create),
  Controller.createAuthor
);
router.get('/get/:authorId', Controller.readAuthor);
router.get('/get', Controller.readAll);
router.patch(
  '/update/:authorId',
  ValidateSchema(Schemas.author.update),
  Controller.updateAuthor
);
router.delete('/delete/:authorId', Controller.deleteAuthor);

export = router;
