import express from "express";

class Server{

    constructor(){
        this.app = express();

        this.port = process.env.PORT;

        this.middlewares();

        this.rutas = {

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

    }
}

export default Server;