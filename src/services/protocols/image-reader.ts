export abstract class ImageReader {
  abstract reader(data: any): Promise<any>;
  abstract mimeJpeg(): any;
}
