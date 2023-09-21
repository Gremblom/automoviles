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

export {
    getAllClientes
}