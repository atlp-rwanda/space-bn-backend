const express = require('express') ;
const app = express();

const { Router } = require('express');

const router = Router();

const controller = require('../controllers/room');

//Rooms controllers

const createRoom = controller.createRoom;
const getRooms = controller.getAllRooms;
const getRoom = controller.getRoomById;
const updateRoom = controller.updateRoom;
const deleteRoom = controller.deleteRoom;

//Rooms routes

router.post('/rooms', createRoom);
router.get('/rooms',getRooms);
router.get('/rooms/:roomId',getRoom);
router.put('/rooms/:idroom',updateRoom);
router.delete('/rooms/:roomId',deleteRoom);



module.exports = router;