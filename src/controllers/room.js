
const model = require('../database/models');

// creating a room

const createRoom = async (req, res) => {
  try {
    const room = await model.roommodel.create(req.body);
    if (room) {

      return res.status(200).json({ room });
    }

  } catch (error) {
    return res.status(500).json({error: error.message})
  }
};

//Getting all rooms

const getAllRooms = async (req, res) => {
  try {
    const rooms = await model.roommodel.findAll();
    return res.status(200).json({ rooms });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//Getting  a particular room by id

const getRoomById = async (req, res) => {
  try {
    const {roomId} = req.params;
    const room = await model.roommodel.findOne({
      where: { id: roomId }
      
    });
    if (room) {
      return res.status(200).json({ room });
    }
    
    return res.status(404).send('Room with the specified ID does not exists');
  } catch (error) {

    return res.status(500).send(error.message);
  }
};

//Updating a particular room by Id

const updateRoom = async (req, res) => {
  try {
    const { idroom } = req.params;
    const [ updated ] = await model.roommodel.update(req.body, {
      where: { id: idroom }
    });
    if (updated) {
      const updatedRoom = await model.roommodel.findOne({ where: { id: idroom } });
      return res.status(200).json({ room: updatedRoom });
    }
    throw new Error('Room not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//Deleting a particular room by id

const deleteRoom = async (req, res) => {
  try {
    const { roomId } = req.params;
    const deleted = await model.roommodel.destroy({
      where: { id: roomId }
    });
    if (deleted) {
      return res.status(200).json({message:"Room deleted successfully."});
    }
    throw new Error("Room not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//Exporting functions

module.exports = {createRoom,getAllRooms,getRoomById,updateRoom,deleteRoom} 
