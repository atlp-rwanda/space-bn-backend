/* eslint-disable no-underscore-dangle */
import model from '../database/models';
import cloudinary from '../config/cloudinary';
import cloudinaryUploader from '../helpers/cloudinaryUploader';

const { imageUploader } = cloudinaryUploader;

const createHotel = async (req, res) => {
  try {
    let imageUrl;
    const { hotelname, location, latitude, longitude, pricerange, ranking, swimmingpool, wifi, parking, breakfast, hotelemail, image } = req.body; 
      
    if (image === undefined) {
      imageUrl = 'https://res.cloudinary.com/samuelnayo/image/upload/v1614197390/nw2fkpfamtvj7hrskdn7.png';
    } else {
      const uploadedImage = await imageUploader(image);
      imageUrl = uploadedImage.secure_url;
    };
    
      const newHotel = await model.hotel.create({
        hotelname,
        location,
        coordinates: [latitude, longitude],
        pricerange,
        ranking,
        swimmingpool,
        wifi,
        parking,
        breakfast,
        hotelemail,
        image: imageUrl
      });
  
      return res.status(201).json({ message: res.__('Hotel added successfully!'), newHotel });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: res.__('Internal server error!') });
  }
};
// Getting all hotels
const getAllHotels = async (req, res) => {
  try {
    const hotels = await model.hotel.findAll({
      include: [
        {
          model: model.RoomModel,
          as: 'rooms',
          attributes: [
            'id',
            'roomType',
            'description',
            'roomLabel',
            'hotelId',
            'status',
            'price',
            'roomImage'
          ]
        }
      ]
    });

    return res.status(200).json({ hotels });
  } catch (error) {
    return res.status(500).send({ message: res.__('Internal server error!') });
  }
};
// Deleting a particular hotel by id
const deleteHotel = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await model.hotel.destroy({
      where: { id }
    });
    if (!deleted) return res.status(404).json({ message: res.__('Hotel with the specified ID does not exists') });
    if (deleted) {
      await model.RoomModel.destroy({
        where: { hotelId: id }
      });
    }
    res.status(200).json({ message: res.__('Hotel deleted successfully.') });
  } catch (error) {
    return res.status(500).send({ message: res.__('Internal server error!') });
  }
};
  // Getting  a particular room by id
const getHotel = async (req, res) => {
  try {
    const hotel = await model.hotel.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: model.RoomModel,
          as: 'rooms',
          attributes: [
            'id',
            'roomType',
            'description',
            'roomLabel',
            'hotelId',
            'status',
            'price',
            'roomImage'
          ]
        }
      ]
    });
    if (hotel) return res.status(200).json({ hotel });
    return res.status(404).send({ message: res.__('Hotel with the specified ID does not exists') });
  } catch (error) {
    return res.status(500).send({ message: res.__('Internal server error!') });
  }
};
const updateHotel = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await model.hotel.update(req.body, {
      where: { id }
    });
    if (updated) {
      const updatedHotel = await model.hotel.findOne({ where: { id } });
      return res.status(200).json({ hotel: updatedHotel });
    }
    return res.status(404).send({ message: res.__('Hotel Not found') });
  } catch (error) {
    return res.status(500).send({ message: res.__('Internal server error!') });
  }
};
  // Exporting functions
module.exports = {
  createHotel, getAllHotels, deleteHotel, getHotel, updateHotel
};
