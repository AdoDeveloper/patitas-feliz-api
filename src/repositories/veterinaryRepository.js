const prisma = require('../config/db');

exports.create = async (data) => {
    return await prisma.veterinaria.create({ data });
};

// Agrega más funciones de repositorio según sea necesario
