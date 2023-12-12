import { NotFound } from "http-errors";
import database from "../config/database";
import { Track } from "../entity/Track";
import { DatabaseRepository, Id, Artist, Query } from "./declarations";

export class TrackRepository implements DatabaseRepository<Track>{
    async create(data: Partial<Track>, query?: Query): Promise<Track> {
        const repository = database.getRepository(Track);
        const track = repository.create(data);
        await repository.save(track);
        return track;
    }
    async list(query?: Query | undefined): Promise<Track[]> {
        const repository = database.getRepository(Track);
        return repository.find();
    }
    async get(id: Id, query?: Query | undefined): Promise<Track> {
        const repository = database.getRepository(Track);
        const track = await repository.findOneBy({id: id as any});
        if(!track) throw new NotFound("Track does not exist!")
        return track;
    }

    async searchByArtist(artist: Artist, query?: Query | undefined): Promise<Track[]> {
        const repository = database.getRepository(Track);
        const tracks = await repository.createQueryBuilder("track").where("track.title like :artist", { artist:`%${artist}%` })
        .getMany();
        return tracks;
    }
    
}