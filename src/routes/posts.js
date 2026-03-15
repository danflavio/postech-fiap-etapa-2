import express from 'express';

const router = express.Router();

const posts = [
    {id: 1, title: 'Pense Python', content: 'Pense Python é um livro de introdução à programação usando a linguagem Python.', author: 'Allen B. Downey'},
    {id: 2, title: 'Clean Code', content: 'Clean Code é um livro que aborda as melhores práticas para escrever código limpo e de fácil manutenção.', author: 'Robert C. Martin'},
    {id: 3, title: 'The Pragmatic Programmer', content: 'The Pragmatic Programmer é um livro que oferece conselhos práticos para programadores, abordando tópicos como design de software, desenvolvimento ágil e melhores práticas de codificação.', author: 'Andrew Hunt e David Thomas'},
    {id: 4, title: 'Design Patterns', content: 'Design Patterns é um livro que apresenta soluções reutilizáveis para problemas comuns de design de software, ajudando os desenvolvedores a criar sistemas mais flexíveis e escaláveis.', author: 'Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides'},
    {id: 5, title: 'Refactoring', content: 'Refactoring é um livro que ensina técnicas para melhorar a estrutura interna do código sem alterar seu comportamento externo, tornando-o mais legível e fácil de manter.', author: 'Martin Fowler'},
    {id: 6, title: 'Code Complete', content: 'Code Complete é um livro que aborda as melhores práticas para escrever código de alta qualidade, cobrindo tópicos como design, construção e manutenção de software.', author: 'Steve McConnell'},
    {id: 7, title: 'The Art of Computer Programming', content: 'The Art of Computer Programming é uma série de livros que cobre uma ampla gama de tópicos relacionados à ciência da computação, incluindo algoritmos, estruturas de dados e análise de complexidade.', author: 'Donald E. Knuth'},
    {id: 8, title: 'Introduction to Algorithms', content: 'Introduction to Algorithms é um livro que apresenta uma introdução abrangente aos algoritmos, cobrindo uma ampla gama de tópicos, desde algoritmos de ordenação até algoritmos de grafos.', author: 'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest e Clifford Stein'},
    {id: 9, title: 'The Clean Coder', content: 'The Clean Coder é um livro que aborda as melhores práticas para se tornar um programador profissional, cobrindo tópicos como ética, comunicação e desenvolvimento de carreira.', author: 'Robert C. Martin'},
    {id: 10, title: 'Cracking the Coding Interview', content: 'Cracking the Coding Interview é um livro que oferece dicas e estratégias para se preparar para entrevistas de emprego em empresas de tecnologia, cobrindo tópicos como algoritmos, estruturas de dados e perguntas comuns de entrevista.', author: 'Gayle Laakmann McDowell'}
]

router.get('/', (req, res) => {
    res.status(200).json(posts);
})

export default router;