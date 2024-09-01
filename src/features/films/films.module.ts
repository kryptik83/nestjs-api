import { Module } from '@nestjs/common';
import { FilmService } from './films.service';
import { FilmsController } from './films.controller';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';
import { Film, FilmSchema } from './films.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: Film.name,
          schema: FilmSchema,
        } as ModelDefinition,
      ],
      'testdb',
    ),
  ],
  controllers: [FilmsController],
  providers: [FilmService],
})
export class FilmsModule {}
