class Card {
    constructor(codigo, pergunta, resposta, deck_id) {
        this.codigo = codigo;
        this.pergunta = pergunta;
        this.resposta = resposta;
        this.deck_id = deck_id;
    }
}

module.exports = Card;