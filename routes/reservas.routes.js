import {Router} from "express";

import {getPendRes} from "../controllers/reservas.controller.js";

const router = Router();

router.get("/pendReserv", getPendRes);

export default router;