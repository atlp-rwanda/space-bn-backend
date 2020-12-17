const express = require('express') ;
const app = express();
const protection = require('../middlewares/check-auth');

const { Router } = require('express');

const router = Router();

const controller = require('../controllers/room');

//Rooms controllers

const createRoom = controller.createRoom;
const getRooms = controller.getAllRooms;
const getRoom = controller.getRoomById;
const updateRoom = controller.updateRoom;
const deleteRoom = controller.deleteRoom;
<<<<<<< HEAD
const getHotelRooms = controller.roomByHotel;
=======
>>>>>>> 4ed03cf... removes the hotel

//Rooms routes

router.post('/rooms',protection, createRoom);
router.get('/rooms', getRooms);
router.get('/rooms/:roomId',getRoom);
<<<<<<< HEAD
router.put('/rooms/:idroom',protection,  updateRoom);
router.delete('/rooms/:roomId',protection, deleteRoom);
router.get('/rooms/hotels/:hotelId/rooms', getHotelRooms);
=======
router.put('/rooms/:idroom',updateRoom);
router.delete('/rooms/:roomId',deleteRoom);
>>>>>>> 4ed03cf... removes the hotel



module.exports = router;