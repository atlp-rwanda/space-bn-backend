import cloudinary from '../config/cloudinary';

export default class cloudinaryUploader {
  static async imageUploader(fileStr) {
    const uploadedImage = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'ml_default'
    });

    return uploadedImage;
  }
}
