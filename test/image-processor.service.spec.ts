import { ImageProcessorService } from '../src/services/image-processor.service';

describe('ImageProcessorService', () => {
  let imageProcessorService: ImageProcessorService;
  let imageReaderAdapterMock: any;
  let mongoClientAdapterMock: any;

  beforeEach(() => {
    imageReaderAdapterMock = {
      reader: jest.fn(),
      mimeJpeg: jest.fn(),
    };

    mongoClientAdapterMock = {
      connect: jest.fn(),
      saveData: jest.fn(),
      getData: jest.fn(),
    };
    imageProcessorService = new ImageProcessorService(
      imageReaderAdapterMock,
      mongoClientAdapterMock,
    );
  });

  describe('genereyeThumbnailName', () => {
    it('should generate the thumbnail name correctly', () => {
      const imageName = 'example_image.jpg';

      const result = imageProcessorService['generateThumbnailName'](imageName);

      expect(result).toBe('example_image_thumb.png');
    });
  });
});
