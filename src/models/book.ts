import mongoose, { Schema, model } from 'mongoose';

export interface Book extends mongoose.Document {
    title: string;
    author: string;
    isbn: string;
}

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    isbn: {
        type: String,
        required: true
    }
});

export default model<Book>('Book', bookSchema);