const { Router } = require('express');

const { getDecks } = require('../controllers/deckController');

const deckRoutes = new Router();

deckRoutes.get('/decks', getDecks);

module.exports = { deckRoutes };