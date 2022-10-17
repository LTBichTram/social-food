import { ConfigOptions, v2 } from 'cloudinary';
import { CLOUDINARY } from './constants';
export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (): ConfigOptions => {
    return v2.config({
      cloud_name: process.env.Cloud_Name,
      api_key: process.env.Cloud_ApiKey,
      api_secret: process.env.Cloud_ApiSecret,
    });
  },
};
