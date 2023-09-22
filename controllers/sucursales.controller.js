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

export {
    getDispCars
}