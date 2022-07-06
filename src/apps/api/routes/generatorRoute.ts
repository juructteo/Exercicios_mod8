import express from "express";
import { GeneratorController } from "../controllers/generatorController";

const router = express.Router();
const _controller = new GeneratorController();



router.get("/gerarcpf", _controller.gerarCPF);

export = router;
