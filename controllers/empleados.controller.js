import conexion from "../database/connection.js";

const getAllVendors = async (req, res)=>{
    try {
        const db = await conexion();
        const collection = db.collection('empleados');

        const response = await collection.find({cargo : "Vendedor"}).toArray();

        res.json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getGerOrAs = async (req, res)=>{
    try {
        const db = await conexion();
        const coleccion = db.collection('empleados');

        const response = await coleccion.find({$or : [{cargo : "Gerente"}, {cargo : "Asistente"}]}).toArray();

        res.json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

export {
    getAllVendors,
    getGerOrAs
}