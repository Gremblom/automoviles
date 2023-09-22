import {Router} from "express";

import {getDispCars} from "../controllers/sucursales.controller.js";

const router = Router();

router.get("/dispCars", getDispCars);

export default router;