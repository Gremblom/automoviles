import conexion from "../database/connection.js";

const getAvAlq = async (req, res)=>{
    try {
        const db = await conexion();
        const collection = db.collection('alquileres');

        const response = await collection.aggregate([
            {$match : {$or : [{estado : "Pendiente"}, {estado : "Cancelado"}]}},
            {$lookup : {
                from : 'automoviles',
                localField : 'id_automovil',
                foreignField : 'id_automovil',
                as : 'automovil'
            }}
        ]).toArray();

        res.json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getActiveAlq = async (req, res)=>{
    try {
        const db = await conexion();
        const collection = db.collection('alquileres');

        const response = await collection.aggregate([
            {$match : {$or : [{estado : "Confirmado"}, {estado : "Aprobado"}]}},
            {$lookup : {
                from : 'clientes',
                localField : 'id_cliente',
                foreignField : 'id_Cliente',
                as : 'cliente'
            }}
        ]).toArray();

        res.json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getOneAlq = async (req, res)=>{
    try {
        const db = await conexion();
        const collection = db.collection('alquileres');

        const {id} = req.body;

        const response = await collection.find({id_alquiler : id}).toArray();

        res.json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getCostTot = async (req, res)=>{
    try {
        const db = await conexion();
        const collection = db.collection('alquileres');

        const response = await collection.aggregate([{$project : {_id : 0, id_alquiler : 1, costo_Total : 1}}]).toArray();

        res.json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getSpcfcDate = async (req, res)=>{
    try {
        const db = await conexion();
        const coleccion = db.collection('alquileres');

        const response = await coleccion.find({fecha_Inicio : "2023-07-05"}).toArray();

        res.json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getClients = async (req, res)=>{
    try {
        const db = await conexion();
        const coleccion = db.collection('alquileres');

        const response = await coleccion.aggregate([
            {$project : {_id : 0, id_cliente : 1, id_alquiler : 1}},
            {$lookup : {
                from : 'clientes',
                localField : 'id_cliente',
                foreignField : 'id_Cliente',
                as : 'cliente'
            }}
        ]).toArray();

        res.json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getAllAlq = async (req, res)=>{
    try {
        const db = await conexion();
        const coleccion = db.collection('alquileres');

        const response = await coleccion.find().toArray();

        res.json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getByDate = async(req, res)=>{
    try {
        const db = await conexion();
        const coleccion = db.collection('alquileres');

        const response = await coleccion.find(
            {$and : [
                {fecha_Inicio : {$gte : "2023-07-05"}},
                {fecha_Inicio : {$lte : "2023-07-10"}}
            ]
        }).toArray();

        res.json(response);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export {
    getAvAlq,
    getActiveAlq,
    getOneAlq,
    getCostTot,
    getSpcfcDate,
    getClients,
    getAllAlq,
    getByDate
}