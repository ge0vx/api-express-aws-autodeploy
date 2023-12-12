import {Router} from 'express';
import { TrackController } from "./track.controller";
import { TrackRepository } from "./track.repository";

const router = Router();
const controller = new TrackController(
    new TrackRepository()
);

router.post("/tracks", controller.create)
router.get("/tracks", controller.list);
router.get("/tracks/:isrcId", controller.get);


export default router;
