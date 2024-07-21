const { Router } = require('express');
const { getCards } = require('../controllers/cardController');

const cardRoutes = new Router();

cardRoutes.get('/cards', getCards);

module.exports = routerCards;