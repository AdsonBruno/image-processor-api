import { Injectable } from '@nestjs/common';
import { MongoConnect } from 'src/services/protocols/mongo';
import { MongoClient as Mongo, Db } from 'mongodb';

@Injectable()
export class MongoClientAdapter extends MongoConnect {
  private client: Mongo | undefined;
  private db: Db | undefined;

  public async connect(): Promise<void> {
    const url = 'mongodb://localhost:27017';
    const dbname = 'exifdata-db';

    const client = new Mongo(url);
    await client.connect();
    this.client = client;
    this.db = client.db(dbname);

    console.log(`Connected to MongoDb at ${url}`);
  }

  public async saveData(collectionName: string, data: any): Promise<any> {
    if (!this.db) {
      throw new Error('MongoDB connection not estabilished');
    }

    const collection = this.db.collection(collectionName);
    const result = await collection.insertOne(data);
    return result;
  }

  public async getdata(collectionName: string): Promise<any> {
    if (!this.client || !this.db) {
      throw new Error('MongoDB connection not estabilished');
    }

    const collection = this.db.collection(collectionName);
    const data = await collection.findOne();
    return data;
  }
}
