import {Router} from "express";

import {getAllVendors} from "../controllers/empleados.controller.js"

const router = Router();

router.get("/allVendors", getAllVendors);

export default router;