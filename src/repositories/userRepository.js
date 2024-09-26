const prisma = require('../config/db');

// Crear un nuevo usuario
exports.create = async (data) => {
    return await prisma.usuario.create({ data });
};

// Buscar un usuario por correo electrónico
exports.findByEmail = async (email) => {
    return await prisma.usuario.findUnique({ where: { email } });
};

// Obtener todos los usuarios con campos específicos
exports.findAll = async () => {
    return await prisma.usuario.findMany({
        select: {
            id: true,       // Incluye el campo 'id'
            nombre: true,   // Incluye el campo 'nombre'
            email: true,    // Incluye el campo 'email'
            rol: true       // Incluye el campo 'rol'
        }
    });
};


// Agrega más funciones de repositorio según sea necesario
