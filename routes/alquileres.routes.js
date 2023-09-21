import {Router} from "express";

import {getAvAlq, getActiveAlq, getOneAlq} from "../controllers/alquileres.controller.js";

const router = Router();

router.get("/availAlq", getAvAlq);
router.get("/activeAlq", getActiveAlq);
router.get("/oneAlq", getOneAlq);

export default router;