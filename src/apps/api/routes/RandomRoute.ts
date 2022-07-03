import express from "express";
import { RandomController } from "../controllers/RandomController";

const router = express.Router();
const _controller = new RandomController();



router.get("/generator", _controller.makeid);

export = router;
