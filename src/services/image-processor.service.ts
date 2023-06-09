import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as ExifParser from 'exif-parser';
import { General } from '../contants';
import { ImageProcessPresenterType } from 'src/image-processor.presenter';
import { ImageReader } from './protocols/image-reader';
import { MongoConnect } from './protocols/mongo';

@Injectable()
export class ImageProcessorService {
  constructor(
    private readonly imageReaderAdapter: ImageReader,
    private readonly mongoClientAdapter: MongoConnect,
  ) {}
  async processImage(url: string): Promise<any> {
    const imageName = path.basename(url);
    const thumbnailName = this.generateThumbnailName(imageName);

    try {
      const image = await this.imageReaderAdapter.reader(url);
      if (image.getHeight() > 720) {
        image.resize(720, 720);
      }
      const imageUrl = `${General.imagesDir}/${thumbnailName}`;
      await image.writeAsync(imageUrl);
      const buffer = await image.getBufferAsync(
        this.imageReaderAdapter.mimeJpeg(),
      );
      const parser = (ExifParser as any).create(buffer);

      const result = parser.parse().tags;
      await this.mongoClientAdapter.saveData('exifdata-db', result);

      const data = await this.mongoClientAdapter.getdata('exifdata-db');
      return {
        originalUrl: url,
        exifMetaInfo: data,

        imageUrl,
      } as ImageProcessPresenterType;
    } catch (error: any) {
      console.log(error);
    }
  }

  private generateThumbnailName(imageName: string): string {
    const fileNameWithoutExtension = path.parse(imageName).name;
    return `${fileNameWithoutExtension}_thumb.png`;
  }
}
