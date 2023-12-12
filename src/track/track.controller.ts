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
        res.status(200).json({
            message: `Create track`
        })
    }

    async list(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        res.status(200).json({
            message: `List tracks!!`
        })
    }

    async get(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        res.status(200).json({
            message: `Get track`
        })
    }

}