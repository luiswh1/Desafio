import express from 'express';
import dotenv from 'dotenv';

import './database/index';
import CategoriaRout from './app/routes/categoria';
import StockRout from './app/routes/stock';
import ProdutoRoute from './app/routes/produto';
import VendaRoute from './app/routes/venda';
import DevolucaoRout from './app/routes/devolucoes';
import DocsRout from './app/routes/docs';
import SaldoRout from './app/routes/saldo';


class App {
    constructor() {
        this.server = express();
        this.config();
        this.middlewares();
        this.routers();
    }

    config() {
        this.server.use(express.json());
        // this.server.use(cors());
        dotenv.config({
            path: process.env.NODE_ENV === 'test'
            ? '.env.test' : '.env',
        });

    }

    middlewares() {        
    }

    routers() {
       this.server.use(CategoriaRout);
       this.server.use(StockRout);
       this.server.use(ProdutoRoute);
       this.server.use(VendaRoute);
       this.server.use(DevolucaoRout);
       this.server.use(SaldoRout);
       this.server.use(DocsRout);
    }
}

export default new App().server;