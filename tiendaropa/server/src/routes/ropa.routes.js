import { Router } from "express";
import { Ropas } from "../controllers/ropa.controllers.js";

const router = Router();

router.get("/shoping", Ropas);


export default router;
