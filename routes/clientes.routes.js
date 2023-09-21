import {Router} from "express";

import {getAllClientes} from "../controllers/clientes.controller.js";

const router = Router();

router.get("/allClientes", getAllClientes);

export default router;