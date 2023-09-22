import {Router} from "express";

import {getAllClientes, getClientByDNI, getClientReserv} from "../controllers/clientes.controller.js";

const router = Router();

router.get("/allClientes", getAllClientes);
router.get("/getByDNI", getClientByDNI);
router.get("/clientReserv", getClientReserv);   

export default router;