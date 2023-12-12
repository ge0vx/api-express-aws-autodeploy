import { Router } from 'express';
import { SpotifyController } from "./spotify.controller";

const router = Router();
const controller = new SpotifyController();

router.get("/searchByTitle/:trackTitle", controller.searchByTitle.bind(controller));
router.get("/searchById/:trackId", controller.searchById.bind(controller));

export default router;