const express = require('express');
const router = express.Router();
//import controller
const userController = require('./../controllers/UserController');

router.get('/user/test', userController.testApi);
router.post('/user/create', userController.index);

module.exports = router;
