import { General } from './contants';

export type ImageProcessPresenterType = {
  originalUrl: string;
  imageUrl: string;
  exifMetaInfo: any;
};

export const imageProcessPresenter = (data: any) => {
  return {
    localpath: {
      original: data.originalUrl,
      thumb: `${General.imagesDir}/${data.imageUrl}`,
    },
    metadata: {
      ...data.exifMetaInfo,
    },
  };
};
