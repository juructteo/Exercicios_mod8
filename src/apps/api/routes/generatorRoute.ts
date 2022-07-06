import express from "express";
import { GeneratorController } from "../controllers/generatorController";

const router = express.Router();
const _controller = new GeneratorController();



router.get("/generator", _controller.gerarCPF);

export = router;
