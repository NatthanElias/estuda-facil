const { pool } = require('../config');
const Card = require('../entities/Card');

const getCardsDB = async () => {
    try {
        const { rows } = await pool.query('SELECT * FROM cards ORDER BY pergunta');
        return rows.map((card) => new Card(card.codigo, card.pergunta, card.resposta, card.deck_id));
    } catch (err) {
        throw "Erro: " + err;
    }
};

module.exports = {
    getCardsDB,
};