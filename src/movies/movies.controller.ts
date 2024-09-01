import { Controller, Get } from '@nestjs/common';
import { MovieService } from './movies.service';
import { Movie } from './movies.schema';

@Controller('api/movies')
export class MoviesController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  getMovies(): Promise<Movie[]> {
    return this.movieService.findAll();
  }
}
