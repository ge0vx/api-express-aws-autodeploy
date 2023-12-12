import { Request, Response, NextFunction } from "express";
import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import  dotenv from 'dotenv';
dotenv.config();

export class SpotifyController {

    spotifyApy: SpotifyApi;

    constructor() {
        const spotifyClientId = process.env.SPOTIFY_CLIENT_ID || "";
        const spotifySecretKey = process.env.SPOTIFY_SECRET_KEY || "";
        this.spotifyApy = SpotifyApi.withClientCredentials(
            spotifyClientId,
            spotifySecretKey
        )
    }
    async searchByTitle(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const { trackTitle } = req.params;
        const items = await this.spotifyApy.search(trackTitle, ["track"]);
        const response = items.tracks.items.map((item) => ({
            id: item.id,
            isrc: item.external_ids.isrc,
            name: item.name,
            image: item.uri,
            artist: item.artists.map((artist)=>artist.name),
            popularity: item.popularity,
        }));

        res.status(200).json(response);
    }

    async searchById(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const { trackId } = req.params;
        const item = await this.spotifyApy.tracks.get(trackId);
        const response = {
            id: item.id,
            isrc: item.external_ids.isrc,
            name: item.name,
            image: item.uri,
            artist: item.artists.map((artist)=>artist.name),
            popularity: item.popularity,
        }

        res.status(200).json(response);
    }

}