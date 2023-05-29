import { Injectable } from '@nestjs/common';
import { MongoConnect } from 'src/services/protocols/mongo';
import { MongoClient as Mongo, Db } from 'mongodb';

@Injectable()
export class MongoClientAdapter extends MongoConnect {
  private client: Mongo | undefined;

  public async connect(): Promise<void> {
    const url = 'mongodb://localhost:27017';

    const client = new Mongo(url);
    await client.connect();
    this.client = client;
    console.log(`Connected to MongoDb at ${url}`);
  }
}
