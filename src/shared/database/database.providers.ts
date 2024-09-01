import { MongooseModule } from '@nestjs/mongoose';

export const databaseConnections = [
  MongooseModule.forRoot('mongodb://localhost:27017/?replicaSet=rs0', {
    connectionName: 'testdb',
    dbName: 'test',
  }),
  MongooseModule.forRoot('mongodb://localhost:27017/?replicaSet=rs0', {
    connectionName: 'main',
    dbName: 'kryptik83_db',
  }),
];
