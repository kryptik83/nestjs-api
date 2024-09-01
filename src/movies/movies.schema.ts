import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';

export type MovieDocument = HydratedDocument<Movie>;

@Schema({
  collection: 'movies',
  optimisticConcurrency: true,
} as SchemaOptions)
export class Movie {
  @ApiPropertyOptional()
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  _id: string;

  @ApiProperty()
  @Prop({ type: mongoose.Schema.Types.String, required: true })
  name: string;

  @ApiProperty()
  @Prop({ type: mongoose.Schema.Types.Number })
  year: number;

  @ApiProperty()
  @Prop([String])
  genres: string[];

  @ApiProperty()
  @Prop({ type: mongoose.Schema.Types.Number })
  rating: number;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
