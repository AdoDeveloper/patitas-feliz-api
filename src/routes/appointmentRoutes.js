const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

router.post('/appointments', appointmentController.createAppointment);
// Agrega más rutas relacionadas con citas según sea necesario

module.exports = router;
