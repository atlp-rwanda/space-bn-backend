import { Router } from 'express';
import {
  getAllHotels, createHotel, deleteHotel, getHotel, getHotelRooms, updateHotel
} from '../controllers/hotelController';
import protection from '../middlewares/check-auth';

const router = Router();

router.get('/', (req, res) => res.send('Welcome to Barefoot Nomad'));
router.post('/createHotel', protection, createHotel);
router.get('/allHotels', protection, getAllHotels);
router.delete('/deleteHotel/:id', protection, deleteHotel);
router.get('/hotel/:id', protection, getHotel);
router.get('/hotelRooms', protection, getHotelRooms);
router.patch('/updateHotel/:id', protection, updateHotel);

export default router;
