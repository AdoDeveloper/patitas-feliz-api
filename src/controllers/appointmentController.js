const appointmentRepository = require('../repositories/appointmentRepository');

exports.createAppointment = async (req, res) => {
    try {
        const { mascotaId, veterinariaId, fecha, notas } = req.body;
        const appointment = await appointmentRepository.create({ mascotaId, veterinariaId, fecha, notas });
        res.status(201).json(appointment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Agrega más controladores para las citas según sea necesario
