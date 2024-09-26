const express = require('express');
const router = express.Router();
const veterinaryController = require('../controllers/veterinaryController');

router.post('/veterinarias', veterinaryController.createVeterinary);
// Agrega más rutas relacionadas con veterinarias según sea necesario

module.exports = router;
