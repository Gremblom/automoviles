import express from "express";

import clientesRouter from "../routes/clientes.routes.js";
import alquileresRouter from "../routes/alquileres.routes.js";
import reservasRouter from "../routes/reservas.routes.js";
import empleadosRouter from "../routes/empleados.routes.js";
import sucursalesRouter from "../routes/sucursales.routes.js";
import automovilesRouter from "../routes/automoviles.routes.js";
import authsRouter from "../routes/auth.controller.js";

class Server{

    constructor(){
        this.app = express();

        this.port = process.env.PORT;

        this.middlewares();

        this.rutas = {
            clientes : '/clients',
            alquileres : '/alquileres',
            reservas : '/reservations',
            empleados : '/employees',
            sucursales : '/sucursales',
            automoviles : '/cars',
            authentications : '/auth'
        }

        this.routes();
    }

    listener(){
        this.app.listen(this.port, ()=>{
            console.log(`Server running in port ${this.port}`);
        });
    }

    middlewares(){
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.rutas.clientes, clientesRouter);
        this.app.use(this.rutas.alquileres, alquileresRouter);
        this.app.use(this.rutas.reservas, reservasRouter);
        this.app.use(this.rutas.empleados, empleadosRouter);
        this.app.use(this.rutas.sucursales, sucursalesRouter);
        this.app.use(this.rutas.automoviles, automovilesRouter);
        this.app.use(this.rutas.authentications, authsRouter);
    }
}

export default Server;