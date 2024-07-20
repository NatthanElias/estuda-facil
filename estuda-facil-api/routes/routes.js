const { Router } = require('express');

const { deckRoutes } = require('./deckRoutes');

const rotas = new Router();

rotas.use(deckRoutes);

module.exports = rotas;