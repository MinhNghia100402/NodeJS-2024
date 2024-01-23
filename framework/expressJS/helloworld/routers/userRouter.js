const controller = require('./../controllers/userControllers');
const express = require('express');
const router = express.Router();

router.get('/fc1',controller.fc1)
router.get('/fc2',controller.fc2)


module.exports = router;