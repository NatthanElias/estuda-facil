const { getDecksDB } = require('../usecases/deckUseCases');

const getDecks = async (request, response) => {
    await getDecksDB()
        .then(data => response.status(200).json(data))
        .catch(err => response.status(400).json({
            status: 'error',
            message: 'Erro ao consultar os decks: ' + err
        }));
}
module.exports = {
    getDecks
};