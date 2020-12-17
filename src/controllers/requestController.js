const model = require('../database/models');

// creating a request

const createRequest = async (req, res) => {
  try {
    const request = await model.requests.create(req.body);
    return res.status(201).json({
      request,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
};


//updating a request
const updateRequest = async (req, res) => {
  try {
    const { idRequest } = req.params;
    const [ updated ] = await model.requests.update(req.body, {
      where: { id: idRequest }
    });
    if (updated) {
      const updatedRequest = await model.requests.findOne({ where: { id: idRequest } });
      return res.status(200).json({ request: updatedRequest });
    }
    throw new Error('Request not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//delettin a request
const deleteRequest = async (req, res) => {
  try {
    const { idRequest } = req.params;
    const deleted = await model.requests.destroy({
      where: { id: idRequest}
    });
    if (deleted) {
      return res.status(204).send("Request deleted");
    }
    throw new Error("Request id provided is not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


//getting all requests

const getAllRequests = async (req, res) => {
  try {
    const accommodation_requests = await model.requests.findAll({});
    return res.status(200).json({ accommodation_requests });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {createRequest,updateRequest,deleteRequest,getAllRequests} 
 