import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Movie } from 'src/features/movies/movies.schema';

export class MovieDto {
  @ApiProperty({ type: String, description: 'Movie Id' })
  @Expose()
  id: string;

  @ApiProperty({ type: String, description: 'Name of the movie' })
  @Expose()
  name: string;

  @ApiProperty({ type: Number, description: 'Year of release' })
  @Expose()
  releaseYear: number;

  @Expose()
  @ApiProperty({
    type: [String],
    description: 'Content genres',
  })
  @Expose()
  genres: string[];

  @ApiProperty({
    type: Number,
    description: 'Film rating on IMDB (if available)',
  })
  @Expose()
  imdbRating: number;

  constructor(movie: Movie) {
    this.id = movie._id;
    this.name = movie.name;
    this.genres = movie.genres;
    this.releaseYear = movie.year;
    this.imdbRating = movie.rating;
  }
}
