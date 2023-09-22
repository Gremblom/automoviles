import {response} from "express";

import generateJWT from "../helpers/generateJWT.js";
import conexion from "../database/connection.js";

const login = async (req, res = response)=>{
    const {email, password} = req.body;

    try {
        const db = await conexion();
        const coleccion = db.collection('clientes');

        const usuario = await coleccion.find({email}).toArray();

        if (!usuario){
            return res.status(400).json({
                msg : "Usuario incorrecto o no registrado en la base de datos"
            });
        }

        if (usuario[0].dni != password){
            return res.status(400).json({
                usuario,
                password,
                msg : "Contraseña incorrecta"
            });
        }

        const token = await generateJWT(usuario.id_Cliente);

        res.json({
            usuario,
            token
        });
    } catch (error) {
        return res.json({
            msg : "Contacte al servicio técnico"
        });
    }
}

export {
    login
}