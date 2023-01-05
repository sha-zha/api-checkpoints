const express           = require('express');
const router         = express.Router();

// Controllers
const UserController = require('../controllers/api/v1/userController');

//models
const User              = require('../models/users');

// all routers
router.get('/v1/user/', UserController.index);
router.get('/v1/user/:id', UserController.show);
router.post('/v1/user/add',UserController.store);
router.post('/v1/user/:id',UserController.update);
router.post('/v1/user/delete/:id',UserController.delete);

module.exports = router;