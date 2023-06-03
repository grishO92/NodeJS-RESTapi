import express from 'express';
import Controller from '../controllers/Book';

const router = express.Router();

router.post('/create', Controller.createBook);
router.get('/get/:bookId', Controller.readBook);
router.get('/get', Controller.readAll);
router.patch('/update/:bookId', Controller.updateBook);
router.delete('/delete/:bookId', Controller.deleteBook);

export = router;
