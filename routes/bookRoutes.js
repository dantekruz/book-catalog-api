const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');
const { getAllBooks, getBookById, createBook, updateBook, deleteBook } = require('../controllers/bookController');

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', protect, createBook);
router.put('/:id', protect, updateBook);
router.delete('/:id', protect, deleteBook);

module.exports = router;