const express = require('express');
const router = express.Router();
//import controller
const userController = require('./../controllers/UserController');

router.get('/user/index', userController.index);
router.get('/user/form', userController.index);
router.get('/user/list', userController.index);
router.get('/user/edit/:user_id', userController.index);

module.exports = router;
