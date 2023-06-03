import express from 'express';
import Controller from '../controllers/Author';

const router = express.Router();

router.post('/create', Controller.createAuthor);
router.get('/get/:authorId', Controller.readAuthor);
router.get('/get', Controller.readAll);
router.patch('/update/:authorId', Controller.updateAuthor);
router.delete('/delete/:authorId', Controller.deleteAuthor);

export = router;
