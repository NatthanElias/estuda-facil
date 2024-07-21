const { getCardsDB } = require('../usecases/cardUseCases');

const getCards = async (request, response) => {
    await getCardsDB()
        .then(data => response.status(200).json(data))
        .catch(err => response.status(400).json({
            status: 'error',
            message: 'Erro ao consultar os cards: ' + err
        }));
}

module.exports = {
    getCards
};