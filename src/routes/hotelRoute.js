import { Router } from 'express';
import {
  getAllHotels, createHotel, deleteHotel, getHotel, getHotelRooms, updateHotel
} from '../controllers/hotelController';
const { requiredLogin } = require('../middlewares/required');

import authentication from '../middlewares/check-auth';

const router = Router();

router.get('/', (req, res) => res.send('Welcome to Barefoot Nomad'));

/**
 * @swagger
 * /hotels/createHotel:
 *    post:
 *      summary: User creates hotels
 *      tags: [Hotels]
 *      requestBody:
 *        required: true
 *        content:
 *          multipart/form-data:
 *            schema:
 *              $ref: '#/components/schemas/hotels'
 *      responses:
 *        "201":
 *          description: A hotel schema
 *
 * components:
 *    schemas:
 *      hotels:
 *        type: object
 *        required:
 *          - hotelname
 *          - pricerange
 *          - location
 *          - ranking
 *          - parking
 *          - wifi
 *          - swimmingpool
 *          - breakfast
 *          - rooms
 *          - images
 *          - hotelemail
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
router.post('/createHotel', createHotel);
router.get('/allHotels', getAllHotels);
router.delete('/deleteHotel/:id', deleteHotel);
router.get('/hotel/:id', getHotel);
router.get('/hotelRooms', getHotelRooms);
router.patch('/updateHotel/:id', updateHotel);

export default router;
