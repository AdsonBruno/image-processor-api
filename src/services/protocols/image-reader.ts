export interface ImageReader {
  reader: (data: any) => Promise<any>;
  mimeJpeg: () => any;
}
