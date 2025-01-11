import { Module } from '@nestjs/common';
import { RickandmortyService } from './rickandmorty.service';
import { RickandmortyController } from './rickandmorty.controller';

@Module({
  providers: [RickandmortyService],
  controllers: [RickandmortyController]
})
export class RickandmortyModule {}
