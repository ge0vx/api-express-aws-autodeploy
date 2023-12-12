import { Router } from 'express';
import { TrackController } from "./track.controller";
import { TrackRepository } from "./track.repository";

const router = Router();
const controller = new TrackController(
    new TrackRepository()
);

router.post("/track", controller.create.bind(controller));
router.get("/track", controller.list.bind(controller));
router.get("/track/:trackId", controller.get.bind(controller));
router.get("/tracksByArtist/:artist", controller.searchByArtist.bind(controller));

export default router;
