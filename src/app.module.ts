import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './features/movies/movies.module';
import { FilmsModule } from './features/films/films.module';
import { databaseConnections } from './shared/database/database.providers';

@Module({
  imports: [MoviesModule, FilmsModule, ...databaseConnections],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
