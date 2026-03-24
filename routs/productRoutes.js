const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

router.get('/', controller.list);
router.post('/add', controller.create);
router.get('/delete/:id', controller.delete);
router.get('/edit/:id', controller.editForm);
router.post('/update/:id', controller.update);

module.exports = router;