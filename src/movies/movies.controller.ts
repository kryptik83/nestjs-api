import { Controller, Get } from '@nestjs/common';
import { MovieService } from './movies.service';
import { Movie } from './movies.schema';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('api/movies')
export class MoviesController {
  constructor(private readonly movieService: MovieService) {}

  @ApiOkResponse({
    type: Movie,
    isArray: true,
  })
  @Get()
  getMovies(): Promise<Movie[]> {
    return this.movieService.findAll();
  }
}
