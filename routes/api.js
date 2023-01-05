const express           = require('express');
const router         = express.Router();

// Controllers
const UserController = require('../controllers/api/v1/userController');
const CheckpointController = require('../controllers/api/v1/checkpointController');
//models
const User = require('../models/users');
const Checkpoint = require('../models/checkpoint');

// all routers users
router.get('/v1/user/', UserController.index);
router.get('/v1/user/:id', UserController.show);
router.post('/v1/user/add',UserController.store);
router.post('/v1/user/:id',UserController.update);
router.post('/v1/user/delete/:id',UserController.delete);

// all routers checkpoints

router.get('/v1/checkpoint/', CheckpointController.index);
router.get('/v1/checkpoint/:id', CheckpointController.show);
router.post('/v1/checkpoint/add',CheckpointController.store);
router.post('/v1/checkpoint/:id',CheckpointController.update);
router.post('/v1/checkpoint/delete/:id',CheckpointController.delete);

module.exports = router;