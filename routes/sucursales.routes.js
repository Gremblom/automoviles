import {Router} from "express";

import {getDispCars, getSucDir} from "../controllers/sucursales.controller.js";

const router = Router();

router.get("/dispCars", getDispCars);
router.get("/sucDirCar", getSucDir);

export default router;