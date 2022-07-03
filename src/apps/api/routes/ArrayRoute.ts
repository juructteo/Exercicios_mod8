import express from "express";
import { ArrayController } from "../controllers/ArrayController";

const router = express.Router();
const _controller = new ArrayController();



router.post("/order", _controller.postOrdem);

export = router;
