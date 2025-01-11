import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RickandmortyModule } from './rickandmorty/rickandmorty.module';

@Module({
  imports: [RickandmortyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
