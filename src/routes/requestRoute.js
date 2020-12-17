const controller = require('../controllers/requestController');
const { Router } = require('express');

const router = Router();

const createR = controller.createRequest;
const updateR = controller.updateRequest; 
const deleteR = controller.deleteRequest;
const getR = controller.getAllRequests;

router.post('/',createR);
router.put('/:idRequest',updateR);
router.delete('/:idRequest',deleteR);
router.get('/',getR);

module.exports = router;


