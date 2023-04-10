const express = require('express');
const app = express();
const sequelize = require('../config/database');
const aveRoutes = require('./routes/ave');
const casalRoutes = require('./routes/casal');
const ninhadaRoutes = require('./routes/ninhada');
const cors = require('cors');

const PORT = process.env.port || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use(aveRoutes);
app.use(casalRoutes);
app.use(ninhadaRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));
