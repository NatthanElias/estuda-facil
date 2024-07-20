const { pool } = require('../config');
const Deck = require('../entities/Deck');

const getDecksDB = async () => {
    try {
        const { rows } = await pool.query('SELECT * FROM decks ORDER BY nome');
        return rows.map((deck) => new Deck(deck.codigo, deck.nome, deck.descricao));
    } catch (err) {
        throw "Erro: " + err;
    }
};

module.exports = {
    getDecksDB
};