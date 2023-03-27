const router = require('express').Router();
const booksController = require('../controllers/bookstore.controller');

//addone
router.post('/', booksController.addBook);
//getall
router.get('/', booksController.getAllBooks);
//getone
router.get('/:id', booksController.getBook);
//updateone
router.put('/:id', booksController.updateBook);
//deleteone
router.delete('/:id', booksController.deleteBook);

module.exports = router;