import {Router} from "express";

import {getAllVendors, getGerOrAs} from "../controllers/empleados.controller.js"

const router = Router();

router.get("/allVendors", getAllVendors);
router.get("/gerOrAs", getGerOrAs);

export default router;