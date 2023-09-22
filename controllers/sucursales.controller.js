import conexion from "../database/connection.js";

const getDispCars = async (req, res)=>{
    try {
        const db = await conexion();
        const collection = db.collection('sucursales');

        const response = await collection.aggregate([
            {$lookup : {
                from : 'sucursalAutomoviles',
                localField : 'id_sucursal',
                foreignField : 'id_Sucursal_Automovil',
                as : 'cantidad_disponible'
            }},
        ]).toArray();

        res.json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getSucDir = async (req, res)=>{
    try {
        const db = await conexion();
        const coleccion = db.collection('sucursales');

        const response = await coleccion.aggregate([
            {$lookup : {
                from : 'sucursalAutomoviles',
                localField : 'id_sucursal',
                foreignField : 'id_Sucursal_Automovil',
                as : 'automoviles'
            }},
            {$unwind : "$automoviles"},
            {$project : {
                _id : 0,
                id_sucursal : 1,
                direccion : 1,
                automoviles : {cantidad_Disponible : 1}
            }}
        ]).toArray();

        res.json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

export {
    getDispCars,
    getSucDir
}