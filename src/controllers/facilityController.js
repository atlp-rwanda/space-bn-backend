/* eslint-disable max-len */
/* eslint-disable valid-jsdoc */
/* eslint-disable no-underscore-dangle */
import model from '../database/models';
import fService from '../services/facilityService';
import cloudinaryUploader from '../helpers/cloudinaryUploader';

const { imageUploader } = cloudinaryUploader;

/**
 * GET facility
 * */

const getFacilities = async (req, res) => {
  try {
    const _facility = await model.Facility.findAll();
    return res.status(200).json({ success: true, _facility });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

/**
 * POST facility
 * */

const addFacility = async (req, res) => {
  try {
    let imageUrl;
      const { location, address, roomNumber, roomDetails, image } = req.body; 
      
      if (image === undefined) {
        imageUrl = 'https://res.cloudinary.com/samuelnayo/image/upload/v1614189789/mxerxfs7qzeykxvmayb6.jpg';
      } else {
        const uploadedImage = await imageUploader(image);
        imageUrl = uploadedImage.secure_url;
      };
      
      const newFacility = await model.Facility.create({
        location,
        address,
        roomNumber,
        roomDetails,
        images: imageUrl
      });
      
    return res.status(201).json({ success: true, message: res.__('Facility added successfully!'), newFacility });
    
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * PATCH facility
 * */
const updateFacility = async (req, res) => {
  try {
    const _facility = await fService.findFacilityById(req.params.id);
    if (_facility) {
      const _facilityResult = await model.Facility.update(req.body, { where: { id: req.params.id } });
      if (_facilityResult) {
        const data = await model.Facility.findOne({ where: { id: req.params.id } });
        res.status(200).send({
          success: true,
          message: res.__('facility updated succeddfuly'),
          data
        });
      }
    } else {
      res.status(404).send({
        success: false,
        message: 'facility  not found!',
      });
    }
  } catch (err) {
    res.status(404).send({ success: false, message: res.__('facility not found!') });
  }
};

/**
 * Delete facility
 * */
const deleteFacility = async (req, res) => {
  try {
    const _facility = await fService.findFacilityById(req.params.id);
    if (_facility) {
      await model.Facility.destroy({ where: { id: req.params.id } });
      res.status(200).send({ success: true, message: res.__('facility deleted successfuly') });
    } else {
      res.status(404).send({ success: false, error: res.__('facility not found!') });
    }
  } catch (error) {
    res.status(404).send({ success: false, error: res.__('facility not found!') });
  }
};

/**
 * Get single facility
 * */

const getSingleFacility = async (req, res) => {
  try {
    const _facility = await fService.findFacilityById(req.params.id);
    if (_facility) {
      return res.status(200).json({ success: true, _facility });
    }
    res.status(404).send({ success: false, error: res.__('facility not found!') });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  getFacilities, addFacility, deleteFacility, updateFacility, getSingleFacility
};
