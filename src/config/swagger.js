const { Categoria, CategoriaCreate, CategoriaUpdate, CategoriaDelete } = 
    require('../app/documentation/Categoria');
const { Devolucao, DevolucaoCreate, DevolucaoUpdate, DevolucaoDelete } = 
    require('../app/documentation/Devolucoes');
const { Produto, ProdutoCreate, ProdutoUpdate, ProdutoDelete } = 
    require('../app/documentation/Produto');
const { Stock, StockCreate, StockUpdate, StockDelete } = 
    require('../app/documentation/Stock');
const { Venda, VendaCreate, VendaUpdate, VendaDelete } = 
    require('../app/documentation/Venda');


module.exports = {
    info: {
        version: '1.0.0',
        title: 'Lojinha do Marcelo',
        description: 'Lojas Marcelo',        
    },
    host: 'localhost:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    
    /*securityDefinitions: {
        JWT: {
            description: 'JWT Token',
            type: 'apiKey',
            in: 'header',
            name: 'Authorization',
        },
    },*/

    
    definitions: {
        Categoria,
        ListaDeCategorias: [
            Categoria
        ],
        CategoriaCreate,
        CategoriaUpdate,
        CategoriaDelete,
        
        Devolucao,
        ListaDeDevolucoes:[
            Devolucao
        ],
        DevolucaoCreate,
        DevolucaoUpdate,
        DevolucaoDelete,

        Produto,
        ListaDeProdutos:[
            Produto
        ],
        ProdutoCreate,
        ProdutoUpdate,
        ProdutoDelete,

        Stock,
        ListaDeStocks:[
            Stock
        ],
        StockCreate,
        StockUpdate,
        StockDelete,

        Venda,
        ListaDeVendas:[
            Venda
        ],
        VendaCreate,
        VendaUpdate,
        VendaDelete
    }
}