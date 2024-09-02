import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { BaseEntity } from 'src/BaseEntity';

export type MovieDocument = HydratedDocument<Movie>;

@Schema({
  collection: 'movies',
  optimisticConcurrency: true,
} as SchemaOptions)
export class Movie extends BaseEntity {
  @Prop({ type: mongoose.Schema.Types.String, required: true })
  name: string;

  @Prop({ type: mongoose.Schema.Types.Number })
  year: number;

  @Prop([String])
  genres: string[];

  @Prop({ type: mongoose.Schema.Types.Number })
  rating: number;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
