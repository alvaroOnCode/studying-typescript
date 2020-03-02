import { Router } from 'express';
import IndexController from '../controllers';

const router: Router = Router();

router.get('/', IndexController.index);

export default router;