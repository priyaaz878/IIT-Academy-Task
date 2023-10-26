const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

router.post('/teacher/signup', teacherController.signup);
router.post('/teacher/login', teacherController.login);

module.exports = router;
