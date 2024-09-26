const petRepository = require('../repositories/petRepository');

exports.createPet = async (req, res) => {
    try {
        const { nombre, especie, raza, edad, propietarioId } = req.body;
        const pet = await petRepository.create({ nombre, especie, raza, edad, propietarioId });
        res.status(201).json(pet);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};