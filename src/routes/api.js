const express = require('express');
const router = express.Router();
const userController = require('./../controllers/UserController');

router.get('/user/list', userController.list);
router.get('/user/:id', userController.getUser);
router.put('/user/update/:id', userController.updateUser);
router.post('/user/create', userController.create);
router.get('/user/delete/:id', userController.delete);

module.exports = router;