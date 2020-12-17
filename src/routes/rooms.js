
const { Router } = require('express');

const router = Router();
const controller = require('../controllers/room');

const createRoom = controller.createRoom;
const getRooms = controller.getAllRooms;
const getRoom = controller.getRoomById;
const deleteRoom = controller.deleteRoom;
const updateRoom = controller.updateRoom;


router.post('/rooms',createRoom);
router.get('/rooms/:id', getRoom);
router.put('/rooms/:idroom',updateRoom);
router.get('/rooms',getRooms);
router.delete('/rooms/:roomid',deleteRoom);

module.exports = router;





