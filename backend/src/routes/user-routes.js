const express = require('express');
//const {check} = require('express-validator');
const usersController = require('../controllers/user-controller');

const router = express.Router();

router.get('/', usersController.getUsers);

router.post('/signup',usersController.signup);

router.post('/login', usersController.login);

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/user-controller');

// router.get('/:uid', userController.getUserById);

// router.get('/cart/:cid',userController.getCartByUserId);

// router.post('/',userController.createUser);

// module.exports = router;