const { Categoria, CategoriaCreate } =
    require('../app/documentation/Categoria');

const { Produto, ProdutoCreate, ProdutoUpdated, ProdutoDelete } =
    require('../app/documentation/Produto');

const { Estoque, EstoqueCreate, EstoqueUpdated, EstoqueDelete } =
    require('../app/documentation/Estoque');

module.exports = {
    info: {
        version: '1.1.1',
        title: 'API Vendas/Devoluções',
        description: 'Api para controle de vendas e devoluções de mercadorias',
    },
    host: 'localhost:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {
        JWT: {
            description: 'JWT Token',
            type: 'apiKey',
            in: 'header',
            name: 'Authorization',
        },
    },
    definitions: {
        Categoria,
        ListaDeCategorias: [
            Categoria
        ],
        CategoriaCreate,
        Produto,
        ListaDeProdutos: [
            Produto
        ],
        ProdutoCreate,
        ProdutoUpdated,
        ProdutoDelete,
        Estoque,
        ListaDeEstoques: [
            Estoque
        ],
        EstoqueCreate,
        EstoqueUpdated,
        EstoqueDelete
    }
}