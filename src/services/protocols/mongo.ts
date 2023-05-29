export abstract class MongoConnect {
  abstract connect(): Promise<void>;
}
