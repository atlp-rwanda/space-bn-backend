import express from 'express';

import multer from 'multer';

const router = express.Router();

import {signup, signin, getAllUsers, getUserById, updateUserById, deleteUserById} from '../controllers/user';

import SchemaValidator from '../middlewares/SchemaValidator';

const validateRequest = SchemaValidator(true);

import checkAuthentication from '../middlewares/check-auth';



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
router.post('/signup', upload.single('user_image'), validateRequest, signup);

/**
 * @swagger
 * /user/signin:
 *    post:
 *      summary: User can signin
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/users'
 *      responses:
 *        "201":
 *          description: A user schema
 *
 * components:
 *    schemas:
 *      users:
 *        type: object
 *        required:
 *          - email
 *          - password
 *        properties:
 *          email:
 *            type: string
 *          password:
 *            type: string
 */
router.post('/signin', validateRequest, signin);

router.get('/', checkAuthentication, getAllUsers);

router.get('/:id', checkAuthentication, getUserById);

router.put('/:id', checkAuthentication, updateUserById);

router.delete('/:id', checkAuthentication, deleteUserById);



module.exports = router;