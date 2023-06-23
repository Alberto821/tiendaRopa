import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import ropas from "./routes/ropa.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(ropas);
app.listen(PORT);
console.log("Servidor ejecutando en puerto", PORT);
