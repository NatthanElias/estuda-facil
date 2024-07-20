CREATE TABLE decks (
    codigo SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);

CREATE TABLE cards (
    codigo SERIAL PRIMARY KEY,
    pergunta TEXT NOT NULL,
    resposta TEXT NOT NULL,
    deck_id INTEGER NOT NULL,
    FOREIGN KEY (deck_id) REFERENCES decks (codigo)
);


INSERT INTO decks (nome, descricao)
VALUES
    ('Redes de Computadores', 'Deck sobre Redes de Computadores'),
    ('Teoria da Computação', 'Deck sobre Teoria da Computação'),
    ('Páginas Web', 'Deck sobre Páginas Web');
	
INSERT INTO cards (pergunta, resposta, deck_id)
VALUES
    ('O que é DNS?', 'DNS (Domain Name System) é o sistema responsável por traduzir nomes de domínio em endereços IP, permitindo a localização de computadores e serviços na rede.', 1),
    ('Qual diferença dos autômatos finitos determinísticos e não-determinísticos?', 'Autômatos finitos determinísticos (DFA) têm uma única transição possível para cada símbolo de entrada em cada estado, enquanto autômatos finitos não-determinísticos (NFA) podem ter várias transições possíveis para o mesmo símbolo.', 2),
    ('O que é uma PWA?', 'Uma PWA (Progressive Web App) é uma aplicação web que utiliza as mais recentes tecnologias web para fornecer uma experiência de usuário similar à de aplicativos nativos.', 3);
	
select * from decks

select * from cards