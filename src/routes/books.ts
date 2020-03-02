import { Router } from 'express';
import BookController from '../controllers/books';

const router: Router = Router();

router.get('/', BookController.index);

router.get('/add', BookController.renderFormBook);

router.post('/add', BookController.saveBook);

export default router;