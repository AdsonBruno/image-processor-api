import { Body, Controller, Post } from '@nestjs/common';
import { ImageProcessorService } from './services/image-processor.service';
import { ImageProcessDto } from './image-process.dto';
import { imageProcessPresenter } from './image-processor.presenter';

@Controller()
export class ImageProcessorController {
  constructor(private readonly appService: ImageProcessorService) {}

  @Post('/image/save')
  async processImage(@Body() imageProcessDto: ImageProcessDto): Promise<any> {
    try {
      const imageInfo = await this.appService.processImage(
        imageProcessDto.image,
      );
      return imageProcessPresenter(imageInfo);
    } catch (error: any) {
      return {
        errors: [
          {
            code: 500,
            message: 'Error when processed image',
          },
        ],
      };
    }
  }
}
