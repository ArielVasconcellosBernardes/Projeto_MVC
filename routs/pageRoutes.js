const express = require('express');
const router = express.Router();
const controller = require('../controllers/pageController');

router.get('/home', controller.home);
router.get('/', controller.login);
router.get('/sobre', controller.sobre);
router.get('/contato', controller.contato);
router.get('/setcookie', controller.setCookie);

module.exports = router;