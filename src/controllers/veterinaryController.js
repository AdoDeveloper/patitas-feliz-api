const veterinaryRepository = require('../repositories/veterinaryRepository');

exports.createVeterinary = async (req, res) => {
    try {
        const { nombreClinica, direccion, telefono, email, password } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const veterinary = await veterinaryRepository.create({ nombreClinica, direccion, telefono, email, password: hashedPassword });
        res.status(201).json(veterinary);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Agrega más controladores para la veterinaria según sea necesario
