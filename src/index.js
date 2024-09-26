const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const prisma = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const petRoutes = require('./routes/petRoutes');
const veterinaryRoutes = require('./routes/veterinaryRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Utiliza las rutas con un prefijo
app.use('/api', userRoutes);
app.use('/api', appointmentRoutes);
app.use('/api', petRoutes);
app.use('/api', veterinaryRoutes);

// Intentar la conexión a la base de datos
prisma.$connect()
    .then(() => {
        console.log('Conexión a la base de datos establecida exitosamente');
    })
    .catch((error) => {
        console.error('Error al conectar con la base de datos:', error.message);
        process.exit(1);
    });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
