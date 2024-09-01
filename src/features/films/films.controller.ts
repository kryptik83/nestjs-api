import { Controller, Get } from '@nestjs/common';
import { FilmService } from './films.service';
import { Film } from './films.schema';

@Controller('api/films')
export class FilmsController {
  constructor(private readonly filmService: FilmService) {}

  @Get()
  getMovies(): Promise<Film[]> {
    return this.filmService.findAll();
  }
}
