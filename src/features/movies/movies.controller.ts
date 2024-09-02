import { Controller, Get } from '@nestjs/common';
import { MovieService } from './movies.service';
import { Movie } from './movies.schema';
import { ApiOkResponse } from '@nestjs/swagger';
import { MovieDto } from 'src/models/movies.dtos';

@Controller('api/movies')
export class MoviesController {
  constructor(private readonly movieService: MovieService) {}

  @ApiOkResponse({
    type: MovieDto,
    isArray: true,
  })
  @Get()
  async getMovies(): Promise<MovieDto[]> {
    const movies: Movie[] = await this.movieService.findAll();
    return movies.map((m: Movie) => new MovieDto(m));
  }
}
