import { Controller, Get } from '@nestjs/common';
import { MongoAdapterService } from './services/mongo.adapter.service';

@Controller('mongodb://localhost:27017')
export class ConnectedController {
  constructor(private readonly mongoAdapterService: MongoAdapterService) {}

  @Get('connect')
  async connectToMongoDb() {
    await this.mongoAdapterService.connect();
  }
}
