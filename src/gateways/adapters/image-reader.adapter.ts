import { ImageReader } from 'src/services/protocols/image-reader';
import * as Jimp from 'jimp';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ImageReaderAdapter extends ImageReader {
  public mimeJpeg(): any {
    return Jimp.MIME_JPEG;
  }
  async reader(data: any): Promise<any> {
    return Jimp.read(data);
  }
}
