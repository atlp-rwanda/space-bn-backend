const express = require('express') ;
const app = express();

const { Router } = require('express');

const router = Router();



const controller = require('../controllers/room');
const controllerHotel = require('../controllers/hotel');
const { getHotelRooms } = require('../controllers/hotel');

//Rooms controllers

const createRoom = controller.createRoom;
const getRooms = controller.getAllRooms;
const getRoom = controller.getRoomById;
const updateRoom = controller.updateRoom;
const deleteRoom = controller.deleteRoom;

//Hotel's controllers

const createHotel = controllerHotel.createHotel;
const deleteHotel = controllerHotel.deleteHotel;
const getHotels = controllerHotel.getAllHotels;
const getHotel = controllerHotel.getHotel;
const updateHotel = controllerHotel.updateHotel;
//const getHotelRooms = controllerHotel.getHotelRooms

//Rooms routes

router.post('/rooms', createRoom);
router.get('/rooms',getRooms);
router.get('/rooms/:roomId',getRoom);
router.put('/rooms/:idroom',updateRoom);
router.delete('/rooms/:roomId',deleteRoom);

//Hotel's routes

router.post('/hotels',createHotel);
router.delete('/hotels/:hotelId',deleteHotel);
router.get('/hotels',getHotels);
router.get('/hotels/:hotelId',getHotel);
router.get('/hotels/:hotelId/rooms',getHotelRooms);
router.put('/hotels/:idhotel',updateHotel);


module.exports = router;