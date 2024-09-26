const prisma = require('../config/db');

exports.create = async (data) => {
    return await prisma.cita.create({ data });
};

// Agrega más funciones de repositorio según sea necesario
