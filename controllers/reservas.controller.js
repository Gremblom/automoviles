import conexion from "../database/connection.js";

const getPendRes = async (req, res)=>{
    try {
        const db = await conexion();
        const collection = db.collection('reservas');

        const response = await collection.aggregate([
            {$match : {estado : "Pendiente"}},
            {$lookup : {
                from : 'clientes',
                localField : 'id_Cliente',
                foreignField : 'id_Cliente',
                as : 'cliente'
            }},
            {$lookup : {
                from : 'automoviles',
                localField : 'id_Automovil',
                foreignField : 'id_automovil',
                as : 'automovil'
            }}
        ]).toArray();

        res.json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

export {
    getPendRes
}