import { Module } from '@nestjs/common';
import { ImageProcessorService } from './services/image-processor.service';
import { ImageProcessorController } from './image-processor.controller';
import { AdaptersModule } from './gateways/adapters/adapaters.module';
import { MongoClientAdapter } from './gateways/adapters/mongo-connect.adapter';
import { MongooseModule } from '@nestjs/mongoose';
import { ConnectedController } from './mongodb.controller';
import { MongoAdapterService } from './services/mongo.adapter.service';

@Module({
  imports: [
    AdaptersModule,
    MongooseModule.forRoot('mongodb://localhost:27017'),
  ],
  controllers: [ImageProcessorController, ConnectedController],
  providers: [ImageProcessorService, MongoClientAdapter, MongoAdapterService],
})
export class AppModule {}
