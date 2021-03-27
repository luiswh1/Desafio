import express from 'express';
import dotenv from 'dotenv';

import './database/index';
import CategoriaRout from './app/routes/categoria';
import StockRout from './app/routes/stock';


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
    }
}

export default new App().server;