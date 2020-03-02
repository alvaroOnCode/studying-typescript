import { Request, Response } from 'express';

class IndexController {

    index(req: Request, res: Response) {
        res.status(200).render('index', { title: 'Home' });
    }

}

export default new IndexController();