import { Injectable } from '@nestjs/common';

@Injectable()
export class RickandmortyService {
  private readonly API_URL = 'https://rickandmortyapi.com/api/character';

  async getCharacterById(id: number): Promise<any> {
    const response = await fetch(`${this.API_URL}/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch character data');
    }

    const character = await response.json();
    const firstEpisodeUrl = character.episode[0];
    const firstEpisodeResponse = await fetch(firstEpisodeUrl);
    const firstEpisode = await firstEpisodeResponse.json();

    return {
      name: character.name,
      status: character.status,
      species: character.species,
      gender: character.gender,
      origin: character.origin.name,
      firstEpisodeApperance: firstEpisode.name,
    };
  }
}
