import { Exclude, Expose } from 'class-transformer';
import { Film } from '../features/films/films.schema';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';

export class FilmDto {
  @Exclude()
  @ApiHideProperty()
  id: string;

  @ApiProperty({ type: String, description: 'Name of the film' })
  @Expose()
  name: string;

  @ApiProperty({ type: Number, description: 'Year of release' })
  @Expose()
  releaseYear: number;

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

  constructor(film: Film) {
    this.id = film._id;
    this.name = film.name;
    this.genres = film.genres;
    this.releaseYear = film.year;
    this.imdbRating = film.rating;
  }
}
