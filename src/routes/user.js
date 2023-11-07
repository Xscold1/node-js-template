const express = require('express');
const router = express.Router();
const userController = require('../controller/user');

router.post('/user/register',userController.REGISTER);
router.post('/user/login',userController.LOGIN);
router.put('/user/update',userController.UPDATE_USER);
router.delete('/user/delete',userController.DELETE_USER);
router.get('/user/get-user',userController.GET_USER);
router.get('/user/get-all-user',userController.GET_ALL_USER);

module.exports = router;