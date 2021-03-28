const { Categoria, CategoriaCreate } = 
    require('../app/documentation/Categoria');

module.exports = {
    info: {
        version: '1.1.1',
        title: 'API Vendas',
        description: 'Api para controle de vendas e devoluções de mercadorias',        
    },
    host: 'localhost:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    definitions: {
        Categoria,
        ListaDeCategoria: [
            Categoria
        ],
        CategoriaCreate,
    }
}