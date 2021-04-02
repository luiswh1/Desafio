const swaggerAutogen = require('swagger-autogen')();
const config = require('./config/swagger');

const endpoints = [
    './src/app/routes/categoria.js',
    './src/app/routes/devolucoes.js',
    './src/app/routes/produto.js',
    './src/app/routes/stock.js',
    './src/app/routes/venda.js',
    './src/app/routes/saldo.js'
];
const outputFile = './src/swagger_documentation.json';

swaggerAutogen(outputFile, endpoints, config);