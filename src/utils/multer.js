import multer from 'multer';
import path from 'path';

module.exports = multer({
storage: multer.diskStorage({
    filename(req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname);
    }
    }),

    fileFilter: (req, file, cb) => {
      // reject a file
      if (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
      } else {
        cb(null, false);
      }
    },
});

