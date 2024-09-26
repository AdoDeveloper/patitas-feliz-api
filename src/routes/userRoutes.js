// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/users', userController.createUser);
router.post('/login', userController.loginUser);

// Ruta para obtener todos los usuarios con autenticación
router.get('/users', authMiddleware, userController.getAllUsers); // Aquí se aplica el middleware

module.exports = router;
