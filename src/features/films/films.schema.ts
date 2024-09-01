import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type FilmDocument = HydratedDocument<Film>;

@Schema({
  collection: 'films',
  optimisticConcurrency: true,
} as SchemaOptions)
export class Film {
  @Prop({ type: mongoose.Schema.Types.String, required: true })
  name: string;

  @Prop({ type: mongoose.Schema.Types.Number })
  year: number;

  @Prop([String])
  genres: string[];

  @Prop({ type: mongoose.Schema.Types.Number })
  rating: number;
}

export const FilmSchema = SchemaFactory.createForClass(Film);
