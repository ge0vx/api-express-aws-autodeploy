import { Request, Response, NextFunction } from "express";
import SpotifyService from "./spotify.service";
import  dotenv from 'dotenv';
dotenv.config();

export class SpotifyController {

    spotifyService: SpotifyService;

    constructor() {
        this.spotifyService = new SpotifyService();
    }
    
    async searchByTitle(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { trackTitle } = req.params;
        const response = await this.spotifyService.searchByTitle(trackTitle)
        res.status(200).json(response);
    }

    async searchById(req: Request, res: Response, next: NextFunction
    ): Promise<void> {
        const { trackId } = req.params;
        const response = await this.spotifyService.searchById(trackId)
        res.status(200).json(response);
    }

}