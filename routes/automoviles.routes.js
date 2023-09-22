import {Router} from "express";

import {getGt5Ppl, getByModPrice, getLess5Disp} from "../controllers/automoviles.controller.js";

const router = Router();

router.get("/getGt5Ppl", getGt5Ppl);
router.get("/modPrice", getByModPrice);
router.get("/disp5", getLess5Disp);

export default router;