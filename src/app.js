const express = require('express');
const app = express();
const db = require('../config/database');
const birdRoutes = require('./routes/birdRoutes');

const PORT = process.env.port || 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(birdRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));
