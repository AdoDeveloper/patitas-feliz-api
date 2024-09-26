// src/controllers/userController.js
const userRepository = require('../repositories/userRepository');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Controlador para crear un nuevo usuario
exports.createUser = async (req, res) => {
    const { nombre, email, password, rol } = req.body;

    try {
        // Validar que se proporcionen todos los campos necesarios
        if (!nombre || !email || !password || !rol) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        const existingUser = await userRepository.findByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: 'El correo electrónico ya está en uso' });
        }

        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userRepository.create({ nombre, email, password: hashedPassword, rol });

        // Devolver el nuevo usuario sin la contraseña
        res.status(201).json({
            id: user.id,
            nombre: user.nombre,
            email: user.email,
            rol: user.rol
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controlador para iniciar sesión
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Validar que se proporcionen todos los campos necesarios
        if (!email || !password) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        const user = await userRepository.findByEmail(email);
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const token = jwt.sign({ id: user.id, rol: user.rol }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Nueva función para obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
    try {
        const users = await userRepository.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
