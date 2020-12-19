const controller = require('../controllers/requestController');
const { Router } = require('express');

const router = Router();

const createR = controller.createRequest;
const updateR = controller.updateRequest; 
const deleteR = controller.deleteRequest;
const getR = controller.getAllRequests;

router.post('/Request',createR);
router.put('/Request/:idRequest',updateR);
router.delete('/Request/:idRequest',deleteR);


/**
 * @swagger
 * /Request:
 *  get:
 *    tags:
 *    - All requests
 *    summary: All requests from database
 *    description: Requests are desplayed from DB
 *    responses:
 *      '200':
 *        description: Requests are desplayed succesffuly.
 *      
*/
router.get('/Request',getR);

module.exports = router;


