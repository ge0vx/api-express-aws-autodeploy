import database from "../config/database";
import { Track } from "../entity/Track";
import { DatabaseRepository, Id, Query } from "./declarations";

export class TrackRepository implements DatabaseRepository<Track>{
    async create(data: Partial<Track>, query?: Query | undefined): Promise<Track> {
        const repository = database.getRepository(Track);
        const task = repository.create(data);
        await repository.save(task);
        return task;
    }
    list(query?: Query | undefined): Promise<Track[]> {
        throw new Error("Method not implemented.");
    }
    get(id: Id, query?: Query | undefined): Promise<Track> {
        throw new Error("Method not implemented.");
    }
    
}