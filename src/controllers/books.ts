import { Request, Response } from 'express';
import bookSchema, { Book } from '../models/book';

class BookController {

    public async index(req: Request, res: Response): Promise<void> {
        const books = await bookSchema.find({});

        console.log("books:", books);
        
        res.status(200).render('books/index', {
            title: 'Books',
            books
        });
    }

    public renderFormBook(req: Request, res: Response): void {
        res.status(200).render('books/add', { title: 'Add a book' })
    }

    public async saveBook(req: Request, res: Response): Promise<void> {
        const { title, author, isbn } = req.body;
        const book: Book = new bookSchema({ title, author, isbn });
        await book.save();
        res.status(200).redirect('/books');
    }

}

export default new BookController();