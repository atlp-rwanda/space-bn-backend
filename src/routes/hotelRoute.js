import { Router } from 'express';
import {
  getAllHotels, createHotel, deleteHotel, getHotel, getHotelRooms, updateHotel
} from '../controllers/hotelController';
// import { requiredLogin } from '../middlewares/required';

const router = Router();

router.get('/', (req, res) => res.send('Welcome to Barefoot Nomad'));
router.post('/createHotel', createHotel);
router.get('/allHotels', getAllHotels);
router.delete('/deleteHotel/:id', deleteHotel);
router.get('/hotel/:id', getHotel);
router.get('/hotelRooms', getHotelRooms);
router.patch('/updateHotel/:id', updateHotel);

export default router;
