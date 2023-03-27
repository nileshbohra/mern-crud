const Books = require('../models/bookstore.model');


exports.addBook = async (req, res) => {
    const { name, description, price } = req.body;
    let book;
    try {
        book = new Books({
            name, description, price,
        })
        await book.save();
    } catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(500).json({ message: 'Something Went Wrong' })
    } else {
        return res.status(200).json({ book })
    }
}

exports.getAllBooks = async (req, res) => {
    const books = await Books.find();
    return res.status(200).json({ books })
}

exports.getBook = async (req, res) => {
    const id = req.params.id;
    let book;
    try {
        book = await Books.findById(id);
    } catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(500).json({ message: 'Something Went Wrong' })
    } else {
        return res.status(200).json({ book })

    }
}

exports.updateBook = async (req, res) => {
    const id = req.params.id;
    const { name, description, price } = req.body;
    let book;
    try {
        book = await Books.findByIdAndUpdate(id, { name, description, price });
    } catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(500).json({ message: 'Something Went Wrong' })
    } else {
        return res.status(200).json({ book })
    }
}

exports.deleteBook = async (req, res) => {
    const id = req.params.id;
    let book;
    try {
        book = await Books.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(500).json({ message: 'Something Went Wrong' })
    } else {
        return res.status(201).json({ book })
    }
}