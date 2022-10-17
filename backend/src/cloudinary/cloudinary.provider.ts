import { ConfigOptions, v2 } from 'cloudinary';
import { CLOUDINARY } from './constants';
export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (): ConfigOptions => {
    return v2.config({
      cloud_name: 'hoquanglinh',
      api_key: '347722296972335',
      api_secret: 'k51X9drlPdK3d3Puq2Vv4a_Vhik',
    });
  },
};
