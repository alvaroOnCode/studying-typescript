import exphbs from 'express-handlebars';
import express from 'express';
import path from 'path';

// Dotenv
require('dotenv').config({
    path: path.join(__dirname, 'env/.env')
});

// Routers
import booksRouter from './routes/books';
import indexRouter from './routes/index';

// Init
const app = express();
import './database';

// Settings
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    defaultLayout: 'main',
    helpers: require('./lib/helpers')
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', indexRouter);
app.use('/books', booksRouter);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server on port ${process.env.SERVER_PORT}.`);
});