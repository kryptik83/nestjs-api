import { Controller, Get } from '@nestjs/common';
import { FilmService } from './films.service';
import { Film } from './films.schema';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('api/films')
export class FilmsController {
  constructor(private readonly filmService: FilmService) {}

  @ApiOkResponse({
    type: Film,
    isArray: true,
  })
  @Get()
  getMovies(): Promise<Film[]> {
    return this.filmService.findAll();
  }
}
