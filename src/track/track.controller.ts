import { BadRequest, NotFound } from "http-errors";
import { Request, Response, NextFunction } from "express";
import { DatabaseRepository } from "./declarations";
import SpotifyService from "../spotify/spotify.service";
import { Track } from "../entity/Track";
import { Artist } from "../entity/Artist";

export class TrackController {

    spotifyService: SpotifyService;
    
    constructor(private repository: DatabaseRepository<Track>) {
        this.spotifyService = new SpotifyService();
    }

    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try{
            const {id} = req.body;
            if (!id) throw new BadRequest("Missing parameter Id");
            const reponseTrack = await this.spotifyService.searchById(id);
            if (reponseTrack instanceof Error) throw new NotFound("Track does not exist!");

            const artists: Artist[] = reponseTrack?.artist?.map((item : any)=>{
                const entity = new Artist()
                entity.artist = item;
                return entity;
            })

            const track = await this.repository.create({
                ...reponseTrack,
                title: reponseTrack.name,
                uri: reponseTrack.image,
                artists: artists
            })
            res.status(200).json(track);
        }catch(error){
            next(error);
        }
    }

    async list(req: Request, res: Response, next: NextFunction): Promise<void> {
        try{
            const tracks = await this.repository.list()
            res.status(200).json(tracks)
        }catch(error){
            next(error);
        }
    }

    async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const {trackId} = req.params;
            const track = await this.repository.get(trackId);
            res.status(200).json(track);
        } catch (error) {
            next(error);
        }
    }

    async searchByArtist(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const {artist} = req.params;
            const tracks = await this.repository.searchByArtist(artist);
            res.status(200).json(tracks);
        } catch (error) {
            next(error);
        }
    }
}