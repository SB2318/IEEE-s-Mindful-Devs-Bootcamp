const express = require('express');
const authController = require('../controllers/auth');
const {
  userValidationRules,
  loginValidationRules,
  validate,
} = require('../middlewares/validation');

const router = express.Router();

router.post(
  '/create-user',
  userValidationRules(),
  validate,
  authController.createUser
);
router.post('/login', loginValidationRules(), validate, authController.login);
router.get('/profile', authController.getProfile);

module.exports = router;