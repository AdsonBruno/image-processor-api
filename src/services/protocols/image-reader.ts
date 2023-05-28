// export interface ImageReader {
//   reader: (data: any) => Promise<any>;
//   mimeJpeg: () => any;
// }

export abstract class ImageReader {
  abstract reader(data: any): Promise<any>;
  abstract mimeJpeg(): any;
}
