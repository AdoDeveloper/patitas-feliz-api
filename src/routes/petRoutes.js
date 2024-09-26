const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');

router.post('/pets', petController.createPet);
// Agrega más rutas relacionadas con mascotas según sea necesario

module.exports = router;
