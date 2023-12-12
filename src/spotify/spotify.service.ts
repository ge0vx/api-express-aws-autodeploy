import { AccessToken, SpotifyApi } from "@spotify/web-api-ts-sdk";

export default class SpotifyService {
  spotifyApi: SpotifyApi;

  constructor() {
    const spotifyClientId = process.env.SPOTIFY_CLIENT_ID || "";
    const spotifySecretKey = process.env.SPOTIFY_SECRET_KEY || "";
    this.spotifyApi = SpotifyApi.withClientCredentials(
      spotifyClientId,
      spotifySecretKey
    );
  }

  public async searchByTitle(trackTitle: string): Promise<any> {
    const items = await this.spotifyApi.search(trackTitle, ["track"]);
    const response = items.tracks.items.map((item) => ({
      id: item.id,
      isrc: item.external_ids.isrc,
      name: item.name,
      image: item.uri,
      artist: item.artists.map((artist) => artist.name),
      popularity: item.popularity,
    }));

    return response;
  }

  public async searchById(trackId: string): Promise<any> {
    try {
      const item = await this.spotifyApi.tracks.get(trackId);
      const response = {
        id: item.id,
        isrc: item.external_ids.isrc,
        name: item.name,
        image: item.uri,
        artist: item.artists.map((artist) => artist.name),
        popularity: item.popularity,
      };

      return response;
    } catch (error) {
        console.error(error);
      return error;
    }
  }
}
