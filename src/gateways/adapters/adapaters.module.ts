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
import { MongoConnect } from 'src/services/protocols/mongo';
import { MongoClientAdapter } from './mongo-connect.adapter';

@Module({
  providers: [
    {
      provide: ImageReader,
      useClass: ImageReaderAdapter,
    },
    { provide: MongoConnect, useClass: MongoClientAdapter },
  ],
  exports: [ImageReader, MongoConnect],
})
export class AdaptersModule {}
