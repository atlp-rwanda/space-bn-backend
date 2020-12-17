const { Router } = require('express');
const router = Router();

const controller = require('../controllers/hotel');

const createHotel = controller.createHotel;
const getAllHotels = controller.getAllHotels;
const deleteHotel = controller.deleteHotel;
const getHotel = controller.getHotel;
const getHotelRooms = controller.getHotelRooms;
const updateHotel = controller.updateHotel;


router.post('/hotels',createHotel);
router.delete('/hotels/:hotelId',deleteHotel);
router.get('/hotels',getAllHotels);
router.get('/hotels/:hotelId',getHotel);
router.get('/hotels/:hotelId/rooms',getHotelRooms);
router.put('/hotels/:idhotel',updateHotel);


module.exports = router;

