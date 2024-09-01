import { Module } from '@nestjs/common';
import { databaseConnections } from './database.providers';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  providers: [MongooseModule],
  exports: [...databaseConnections],
})
export class DatabaseModule {}
