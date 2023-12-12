import { Request, Response, NextFunction } from "express";
import { DatabaseRepository } from "./declarations";
import { Track } from "../entity/Track";

export class TrackController {

    constructor(private repository: DatabaseRepository<Track>) {}

    async create(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try{
            const body = req.body;
            const track = await this.repository.create(body)
            res.status(200).json(track)
        }catch(error){
            next(error);
        }
    }

    async list(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try{
            const tracks = await this.repository.list()
            res.status(200).json(tracks)
        }catch(error){
            next(error);
        }
    }

    async get(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const {isrcId} = req.params;
            const task = await this.repository.get(isrcId);
            res.status(200).json(task);
        } catch (error) {
            next(error);
        }
    }

}