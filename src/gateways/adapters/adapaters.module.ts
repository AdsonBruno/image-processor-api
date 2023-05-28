// import { Module } from '@nestjs/common';
// import { ImageReaderAdapter } from './image-reader.adapter';

// @Module({
//   providers: [ImageReaderAdapter],
//   exports: [ImageReaderAdapter],
// })
// export class AdaptersModule {}

import { Module } from '@nestjs/common';
import { ImageReaderAdapter } from './image-reader.adapter';
import { ImageReader } from 'src/services/protocols/image-reader';

@Module({
  providers: [
    {
      provide: ImageReader,
      useClass: ImageReaderAdapter,
    },
  ],
  exports: [ImageReader],
})
export class AdaptersModule {}
