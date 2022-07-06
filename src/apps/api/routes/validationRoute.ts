import express from "express";
import { ValidationController } from "../controllers/validationController";

const router = express.Router();
const _controller = new ValidationController();



router.get("/order", _controller.validarCPF);

export = router;
