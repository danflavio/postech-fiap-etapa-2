CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insere um registro inicial para garantir que o teste de listagem não venha vazio
INSERT INTO posts (title, content, author) 
VALUES ('Aula Inicial', 'Conteúdo da aula de teste.', 'Professor Dan');