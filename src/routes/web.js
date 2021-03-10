const express = require('express');
const router = express.Router();
//import controller
const userController = require('./../controllers/UserController');

router.get('/user/index', userController.index);
router.get('/user/form', userController.index);
router.get('/user/show', userController.index);

module.exports = router;
