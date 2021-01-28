import { Router } from 'express';
import { authManager } from '../middlewares/authManager';
import { updateRequestValidation } from '../middlewares/requestValidation';
import managerController from '../controllers/managerController';

const router = new Router(),
  {
    getAllRequests,
    getOneRequest,
    addRequest,
    updateRequest
  } = managerController;

/**
 * @swagger
 * /manager/requests:
 *  get:
 *    tags: [Manager]
 *    summary: Manager can get all requests.
 *    description: Manager can get all requests from database.
 *    responses:
 *      '200':
 *        description: Requests are displayed successfuly.
*/
router.get('/requests', authManager, getAllRequests);

/**
 * @swagger
 * /manager/requests/{id}:
 *  get:
 *    tags: [Manager]
 *    summary: Manager can get one request.
 *    description: Manager can get any request from database.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *          minimum: 1
 *        description: request id
 *    responses:
 *      '200':
 *        description: Requests are displayed successfuly.
*/
router.get('/requests/:id', authManager, getOneRequest);

/**
 * @swagger
 * /manager/requests:
 *    post:
 *      tags: [Manager]
 *      summary: Manager can add a request.
 *      description: Manager can add a request in database.
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/addRequest'
 *      responses:
 *        "200":
 *          description: Request added successfully!
 * components:
 *    schemas:
 *      addRequest:
 *        type: object
 *        required:
 *          - idUser
 *          - idRoom
 *          - dateStart
 *          - dateEnd
 *        properties:
 *          idUser:
 *             type: number
 *          idRoom:
 *             type: number
 *          dateStart:
 *            type: string
 *          dateEnd:
 *            type: string
 */
router.post('/requests', authManager, addRequest);
/**
 * @swagger
 * /manager/requests/{id}:
 *   put:
 *    tags: [Manager]
 *    summary: Manager can update a request.
 *    description: Manager can update any request from database.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *          minimum: 1
 *        description: request id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/updateRequest'
 *    responses:
 *      '200':
 *        description: Request updated successfully!
 * components:
 *    schemas:
 *      updateRequest:
 *        type: object
 *        required:
 *          - requestStatus
 *        properties:
 *          requestStatus:
 *            type: string
*/
router.put('/requests/:id', authManager, updateRequestValidation, updateRequest);

export default router;
