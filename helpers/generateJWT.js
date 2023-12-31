import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateJWT =  (uid = '') =>{

    return new Promise((resolve, reject)=>{

        const payload = {uid};

        jwt.sign(payload, process.env.SECRET_OR_PRIVATE_KEY, {
            expiresIn : '4h'
        }, (err, token)=>{
            if (err){
                console.log(err);
                reject ('No se pudo generar el JSON WEB TOEKN');
            } else {
                resolve (token);
            }
        });
    });
}

export default generateJWT;