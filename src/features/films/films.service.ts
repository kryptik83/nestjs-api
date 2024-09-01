import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// import { CreateCatDto } from './dto/create-cat.dto';
import { Film } from './films.schema';

@Injectable()
export class FilmService {
  constructor(
    @InjectModel(Film.name, 'testdb') private readonly filmModel: Model<Film>,
  ) {}

  //   async create(createCatDto: CreateCatDto): Promise<Movie> {
  //     const createdCat = new this.fileModel(createCatDto);
  //     return createdCat.save();
  //   }

  async findAll(): Promise<Film[]> {
    return this.filmModel.find().exec();
  }
}
