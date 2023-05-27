import { Module } from '@nestjs/common';
import { ImageProcessorService } from './services/image-processor.service';
import { ImageProcessorController } from './image-processor.controller';
import { AdaptersModule } from './gateways/adapters/adpaters.module';

@Module({
  imports: [AdaptersModule],
  controllers: [ImageProcessorController],
  providers: [ImageProcessorService],
})
export class AppModule {}
