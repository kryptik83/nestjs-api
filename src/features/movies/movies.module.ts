import { Module } from '@nestjs/common';
import { MovieService } from './movies.service';
// import { DatabaseModule } from 'src/shared/database/database.module';
import { MoviesController } from './movies.controller';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';
import { Movie, MovieSchema } from './movies.schema';
// import { moviesProviders } from './movies.providers';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: Movie.name,
          schema: MovieSchema,
        } as ModelDefinition,
      ],
      'main',
    ),
  ],
  controllers: [MoviesController],
  providers: [MovieService],
})
export class MoviesModule {}
