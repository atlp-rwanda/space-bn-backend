/* eslint-disable no-underscore-dangle */
/* eslint-disable require-jsdoc */
import model from '../database/models';

const { request } = model;

export default class managerController {
  // get all requests
  static async getAllRequests(req, res) {
    try {
      const allRequests = await request.findAll({});

      if (!allRequests) return res.status(400).json({ message: res.__('No request found.') });

      return res.status(200).json({ message: res.__('All requests found successfully!'), allRequests });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // get one request
  static async getOneRequest(req, res) {
    try {
      const { id } = req.params;
      const existingRequest = await request.findOne({ where: { id } });

      if (!existingRequest) return res.status(400).json({ message: res.__('Request does not exist.') });

      return res.status(200).json({ message: res.__('Request found successfully!'), existingRequest });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // create a request
  static async addRequest(req, res) {
    try {
      const savedRequest = await request.create(req.body);

      return res.status(201).json({ message: res.__('Request added successfully!'), savedRequest });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // update a request
  static async updateRequest(req, res) {
    try {
      const { id } = req.params;
      const existingRequest = await request.findOne({ where: { id } });

      if (!existingRequest) return res.status(404).json({ message: res.__('Request does not exist.') });

      await request.update(req.body, { where: { id } });

      const updatedRequest = await request.findOne({ where: { id } });
      return res.status(200).json({ message: res.__('Request updated successfully!'), updatedRequest });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }
}
