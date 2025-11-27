import "reflect-metadata";
import { DataSource} from "typeorm";
import {Categoria} from "../server/entities/Categoria";
import {Produto} from "../server/entities/Produto";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "rootroot",
    database: "estoque_type",

    synchronize: true,
    logging: true,

    entities: [
        Categoria,
        Produto
    ],
    migrations:[],
    subscribers:[],
});