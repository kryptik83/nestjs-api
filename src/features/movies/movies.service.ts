import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

// import { CreateCatDto } from './dto/create-cat.dto';
import { Movie } from './movies.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MovieService {
  constructor(
    @InjectModel(Movie.name, 'main') private readonly movieModel: Model<Movie>,
  ) {}

  //   async create(createCatDto: CreateCatDto): Promise<Movie> {
  //     const createdCat = new this.movieModel(createCatDto);
  //     return createdCat.save();
  //   }

  async findAll(): Promise<Movie[]> {
    return this.movieModel.find().exec();
  }
}
