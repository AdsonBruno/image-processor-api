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

// export const imageProcessPresenter = async (data: any) => {
//   const resultData = {
//     localpath: {
//       original: data.originalUrl,
//       thum: `${General.imagesDir}/${data.imageUrl}`,
//     },
//     metadata: {
//       ...data.exifMetaInfo,
//     },
//   };

//   const result = await Result.create(resultData);

//   return {
//     ...resultData,
//     _id: result._id,
//   };
// };

// export const imageProcessPresenter = async (data: any) => {
//   const resultData = {
//     localpath: {
//       original: data.originalUrl,
//       thumb: `${General.imagesDir}/${data.imageUrl}`,
//     },
//     metadata: {
//       ...data.exifMetaInfo,
//     },
//   };

//   const batchSize = 100;
//   const results = [];
//   const resultDataArray = Array.isArray(resultData) ? resultData : [resultData];
//   // let batch = [];

//   for (let i = 0; i < resultDataArray.length; i += batchSize) {
//     const batch = resultDataArray.slice(i, i + batchSize);
//     const batchResult = await Result.create(batch);
//     results.push(...batchResult);
//   }

//   return results.map((result) => ({
//     ...resultData,
//     _id: result._id,
//   }));
// };
