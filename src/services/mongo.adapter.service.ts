import { Injectable } from '@nestjs/common';
import { MongoClientAdapter } from 'src/gateways/adapters/mongo-connect.adapter';
import { MongoConnect } from './protocols/mongo';

@Injectable()
export class MongoAdapterService {
  constructor(private readonly mongoAdapter: MongoConnect) {}
  async connect() {
    // const mongoAdapter = new MongoClientAdapter();
    // await mongoAdapter.connect();
    await this.mongoAdapter.connect();
  }
}
