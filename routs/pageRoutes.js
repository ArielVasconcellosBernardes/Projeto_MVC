const express = require('express');
const router = express.Router();
const controller = require('../controllers/pageController');

router.get('/', controller.home);
router.get('/sobre', controller.sobre);
router.get('/contato', controller.contato);

module.exports = router;