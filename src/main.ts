import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MongoAdapterService } from './services/mongo.adapter.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const mongoAdapterService = app.get(MongoAdapterService);
  await mongoAdapterService.connect();
  await app.listen(3000);
}
bootstrap();
