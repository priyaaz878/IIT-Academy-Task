const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/student/signup', studentController.signup);
router.post('/student/login', studentController.login);

module.exports = router;
