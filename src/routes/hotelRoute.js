import { Router } from 'express';
import {
  getAllHotels, createHotel, deleteHotel, getHotel, getHotelRooms, updateHotel
} from '../controllers/hotelController';
import protection from '../middlewares/check-auth';

const router = Router();

router.get('/', (req, res) => res.send('Welcome to Barefoot Nomad'));

/**
 * @swagger
 * /Request:
 *    post:
 *      tags: [CREATING HOTELS]
 *      summary: Authenticated user can create a hotel
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/requests'
 *      responses:
 *        "200":
 *          description: A post schema
 *
 * components:
 *    schemas:
 *      requests:
 *        type: object
 *        required:
 *          - dateStart
 *          - dateEnd
 *          - idRoom
 *
 *        properties:
 *          dateStart:
 *            type: string
 *          dateEnd:
 *            type: string
 *          idRoom:
 *             type: number
 */

router.post('/createHotel', protection, createHotel);
router.get('/allHotels', protection, getAllHotels);
router.delete('/deleteHotel/:id', protection, deleteHotel);
router.get('/hotel/:id', protection, getHotel);
router.get('/hotelRooms', protection, getHotelRooms);
router.patch('/updateHotel/:id', protection, updateHotel);

export default router;
