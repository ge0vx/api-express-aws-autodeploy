import { NotFound } from "http-errors";
import database from "../config/database";
import { Track } from "../entity/Track";
import { DatabaseRepository, Id, Query } from "./declarations";

export class TrackRepository implements DatabaseRepository<Track>{
    async create(data: Partial<Track>, query?: Query): Promise<Track> {
        const repository = database.getRepository(Track);
        const task = repository.create(data);
        await repository.save(task);
        return task;
    }
    async list(query?: Query | undefined): Promise<Track[]> {
        const repository = database.getRepository(Track);
        return repository.find();
    }
    async get(id: Id, query?: Query | undefined): Promise<Track> {
        const repository = database.getRepository(Track);
        const task = await repository.findOneBy({id: id as any});
        if(!task) throw new NotFound("Task does not exist!")
        return task;
    }
    
}