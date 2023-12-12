import { NotFound } from "http-errors";
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
        try{
            const { trackTitle } = req.params;
            const response = await this.spotifyService.searchByTitle(trackTitle);
            res.status(200).json(response);
        }catch(error){
            next(error);
        }
    }

    async searchById(req: Request, res: Response, next: NextFunction
    ): Promise<void> {
        try{
            const { trackId } = req.params;
            const response = await this.spotifyService.searchById(trackId)
            if (response instanceof Error) throw new NotFound("Track does not exist!") 
            res.status(200).json(response);
        }catch(error){
            next(error);
        }
    }

}