import { Module } from '@nestjs/common';
import { ImageProcessorService } from './services/image-processor.service';
import { ImageProcessorController } from './image-processor.controller';
import { AdaptersModule } from './gateways/adapters/adapaters.module';
import { ImageReaderAdapter } from './gateways/adapters/image-reader.adapter';
import { ImageReader } from './services/protocols/image-reader';

@Module({
  imports: [AdaptersModule],
  controllers: [ImageProcessorController],
  providers: [ImageProcessorService],
})
export class AppModule {}
