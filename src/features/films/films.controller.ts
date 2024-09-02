import { Controller, Get } from '@nestjs/common';
import { FilmService } from './films.service';
import { Film } from './films.schema';
import { ApiOkResponse } from '@nestjs/swagger';
import { FilmDto } from '../../models/films.dtos';

@Controller('api/films')
export class FilmsController {
  constructor(private readonly filmService: FilmService) {}

  @ApiOkResponse({
    type: FilmDto,
    isArray: true,
  })
  @Get()
  async getMovies(): Promise<FilmDto[]> {
    const films: Film[] = await this.filmService.findAll();
    return films.map((f: Film) => new FilmDto(f));
  }
}
