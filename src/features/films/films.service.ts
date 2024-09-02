import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Film } from './films.schema';

@Injectable()
export class FilmService {
  constructor(
    @InjectModel(Film.name, 'testdb') private readonly filmModel: Model<Film>,
  ) {}

  async findAll(): Promise<Film[]> {
    return this.filmModel.find().exec();
  }
}
