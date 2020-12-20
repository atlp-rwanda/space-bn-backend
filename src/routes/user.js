import express from 'express';
import multer from 'multer';

const router = express.Router();
const userController = require('../controllers/user');
const SchemaValidator = require('../middlewares/SchemaValidator');

const validateRequest = SchemaValidator(true);

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './src/uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname);
    }
});
  
  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

/**
 * @swagger
 * /user/signup:
 *    post:
 *      summary: User can signup
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          multipart/form-data:
 *            schema:
 *              $ref: '#/components/schemas/user'
 *      responses:
 *        "201":
 *          description: A user schema
 *
 * components:
 *    schemas:
 *      user:
 *        type: object
 *        required:
 *          - firstname
 *          - lastname
 *          - telephone
 *          - email
 *          - password
 *          - role
 *          - gender
 *          - origin
 *          - profession
 *          - age
 *          - identification_type
 *          - identification_number
 *          - user_image
 *        properties:
 *          firstname:
 *            type: string
 *          lastname:
 *            type: string
 *          telephone:
 *            type: string
 *          email:
 *            type: string
 *          password:
 *            type: string
 *          role:
 *            type: string
 *          gender:
 *            type: string
 *          origin:
 *            type: string
 *          profession:
 *            type: string
 *          age:
 *            type: integer
 *          identification_type:
 *            type: string
 *          identification_number:
 *            type: string
 *          user_image:
 *            type: string
 *            format: binary
 */
router.post('/signup', upload.single('user_image'), validateRequest, userController.signup);



module.exports = router;