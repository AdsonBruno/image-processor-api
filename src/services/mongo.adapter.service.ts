import { Injectable } from '@nestjs/common';
import { MongoConnect } from './protocols/mongo';

@Injectable()
export class MongoAdapterService {
  constructor(private readonly mongoAdapter: MongoConnect) {}
  async connect() {
    await this.mongoAdapter.connect();
  }
}
