import conexion from "../database/connection.js";

const getGt5Ppl = async (req, res)=>{
    try {
        const db = await conexion();
        const coleccion = db.collection('automoviles');

        const response = await coleccion.find({capacidad : {$gt : 5}}).toArray();

        res.json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getByModPrice = async (req, res)=>{
    try {
        const db = await conexion();
        const coleccion = db.collection('automoviles');

        const response = await coleccion.find().sort({marca : 1, modelo : 1}).toArray();

        res.json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getLess5Disp = async (req, res)=>{
    try {
        const db = await conexion();
        const coleccion = db.collection('automoviles');

        const response = await coleccion.find({capacidad : 5, disponible : true}).toArray();

        res.json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

export {
    getGt5Ppl,
    getByModPrice,
    getLess5Disp
}