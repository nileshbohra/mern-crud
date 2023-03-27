const router = require('express').Router();

const userController = require('../controllers/auth.controller');

router.post('/register', userController.userRegister);
// router.post('/login', userController);\

module.exports = router;