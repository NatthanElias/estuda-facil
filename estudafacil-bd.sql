create table categorias (
	codigo serial not null primary key, 
	nome varchar (40) not null
);

create table cards (
	codigo serial not null primary key,
	id_categoria INT NOT NULL,
    pergunta TEXT NOT NULL,
    resposta TEXT NOT NULL,
    FOREIGN KEY (id_categoria) REFERENCES categorias(codigo)
)

insert into categorias (nome) values ('Teoria da Computação') , ('Redes') , ('Páginas Web');

select * from categorias

INSERT INTO cards (id_categoria, pergunta, resposta) VALUES
(1, 'O que é um automato finito nao deterministico?', 'Um modelo de máquina teórica que, para cada par de estado e símbolo, a máquina pode fazer uma transição para zero ou mais estados'),
(2, 'Qual função de um servidor DNS?', 'Resolver nomes de domínio em endereços IP e vice-versa'),
(3, 'O que é um PWA?', 'Uma aplicação web que oferece funcionalidades adicionais como funcionamento offline, notificações push e atualização em segundo plano, proporcionando uma experiência semelhante à de um aplicativo nativo');

SELECT * FROM cards