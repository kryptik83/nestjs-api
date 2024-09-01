import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';

export type FilmDocument = HydratedDocument<Film>;

@Schema({
  collection: 'films',
  optimisticConcurrency: true,
} as SchemaOptions)
export class Film {
  @ApiPropertyOptional()
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  _id: string;

  @ApiProperty()
  @Prop({ type: mongoose.Schema.Types.String, required: true })
  name: string;

  @ApiProperty({
    type: Number,
    description: 'Year movie was released',
  })
  @Prop({ type: mongoose.Schema.Types.Number })
  year: number;

  @ApiProperty({
    description: 'Genre of the film',
  })
  @Prop([String])
  genres: string[];

  @ApiProperty({
    description: 'IMDB rating',
  })
  @Prop({ type: mongoose.Schema.Types.Number })
  rating: number;
}

export const FilmSchema = SchemaFactory.createForClass(Film);
