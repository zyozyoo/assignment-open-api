import { Controller, Get, Param } from '@nestjs/common';
import { RickandmortyService } from './rickandmorty.service';

@Controller('rickandmorty')
export class RickandmortyController {
  constructor(private readonly rickandmortyService: RickandmortyService) {}

  @Get(':id')
  async getCharacter(@Param('id') id: string) {
    const characterId = parseInt(id, 10);
    if (isNaN(characterId)) {
      return { error: 'Invalid character ID' };
    }

    const characterData = await this.rickandmortyService.getCharacterById(characterId);
    
    return {
      'Check out characters in the Rick and Morty show!': characterData,
    };
  }
}
