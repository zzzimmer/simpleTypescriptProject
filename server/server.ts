import "reflect-metadata";
import express from "express";
import {AppDataSource} from "../database/data-source";
import routes from "./../routes/routes";

const app = express();

//configuta o uso de json pelo express
app.use(express.json());

AppDataSource.initialize().then(() => {

    //registra as rotas
    app.use(routes);

    app.listen(3000, () => {
        console.log(" server em http://localhost:3000");
    });

}).catch(error => console.log(error));
