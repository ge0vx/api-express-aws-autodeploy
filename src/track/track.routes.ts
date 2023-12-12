import {Router} from 'express';
import { TrackController } from "./track.controller";
import { TrackRepository } from "./track.repository";

const router = Router();
const controller = new TrackController(
    new TrackRepository()
);

router.post("/tracks", controller.create.bind(controller));
router.get("/tracks", controller.list.bind(controller));
router.get("/tracks/:isrcId", controller.get.bind(controller));

export default router;
