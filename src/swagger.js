const swaggerAutogen = require('swagger-autogen')();
const config = require('./config/swagger');

const endpoints = [
    './src/app/routes/categorias.js',
    './src/app/routes/devolucoes.js',
    './src/app/routes/estoques.js',
    './src/app/routes/motivos.js',
    './src/app/routes/movimentacoes.js',
    './src/app/routes/produtos.js',
    './src/app/routes/tiposMovimentacoes.js'
];
const outputFile = './src/swagger_documentation.json';

swaggerAutogen(outputFile, endpoints, config);