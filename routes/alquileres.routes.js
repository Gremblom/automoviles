import {Router} from "express";

import {getAvAlq, getActiveAlq, getOneAlq, getCostTot, getSpcfcDate, getClients} from "../controllers/alquileres.controller.js";

const router = Router();

router.get("/availAlq", getAvAlq);
router.get("/activeAlq", getActiveAlq);
router.get("/oneAlq", getOneAlq);
router.get("/totCost", getCostTot);
router.get("/getByDate", getSpcfcDate);
router.get("/allClients", getClients);

export default router;