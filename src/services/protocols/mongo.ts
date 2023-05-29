export abstract class MongoConnect {
  abstract connect(): Promise<void>;
  abstract saveData(collectionName: string, data: any): Promise<any>;
}
