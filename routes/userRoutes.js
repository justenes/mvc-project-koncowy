const express = require('express');
const router = express.Router();
const avatarUpload = require('../middleware/avatarUpload'); //profil resmi
const userController = require('../controllers/userController');
const auth = require('../middleware/auth'); // profil dogrulaam sonrasi

router.get('/register', userController.showRegisterForm);
router.get('/login', userController.showLoginForm);
router.post('/login', userController.login);
router.get('/profile', auth, userController.profile);
router.post('/register', avatarUpload.single('avatar'), userController.register);
router.post('/logout', userController.logout);

module.exports = router;
