import conexion from "../database/connection.js";

const getAllClientes = async (req, res)=>{
    try {
        const db = await conexion();
        const coleccion = db.collection('clientes');

        const response = await coleccion.find().toArray();

        res.json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getClientByDNI = async (req, res)=>{
    try {
        const db = await conexion();
        const colleccion = db.collection('clientes');

        const {dni} = req.body;

        const response = await colleccion.find({dni}).toArray();

        res.json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getClientReserv = async (req, res)=>{
    try {
        const db = await conexion();
        const coleccion = db.collection('clientes');

        const {cliente} = req.body;

        const response = await coleccion.aggregate([
            {$match : {id_Cliente : cliente}},
            {$lookup : {
                from : 'reservas',
                localField : 'id_Cliente',
                foreignField : 'id_Cliente',
                as : 'reservas'
            }},
            {$match : {"reservas.estado" : 'Pendiente'}}
        ]).toArray();

        res.json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

export {
    getAllClientes,
    getClientByDNI,
    getClientReserv
}