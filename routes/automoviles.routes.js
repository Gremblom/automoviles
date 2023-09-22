import {Router} from "express";

import {getGt5Ppl, getByModPrice} from "../controllers/automoviles.controller.js";

const router = Router();

router.get("/getGt5Ppl", getGt5Ppl);
router.get("/modPrice", getByModPrice);

export default router;