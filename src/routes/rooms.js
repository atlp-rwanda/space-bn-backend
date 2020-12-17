
const { Router } = require('express');

const router = Router();
const controller = require('../controllers/room');

const createRoom = controller.createRoom;
const getRooms = controller.getAllRooms;
const getRoom = controller.getRoomById;
const deleteRoom = controller.deleteRoom;
const updateRoom = controller.updateRoom;

/**
 * @swagger
 *
 * /rooms:
 *    post:
 *      summary: add a room
 *      tags: [rooms]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/room'
 *      responses:
 *        "201":
 *          description: Article schema
 *
 * components:
 *    schemas:
 *      room:
 *        type: object
 *        required:
 *          - roomType
 *          - description
 *          - roomLabel
 *          - hotelId
 *          - status
 *          - price 
 *        properties:
 *          roomType:
 *            type: string
 *          description:
 *              type: string
 *          roomLabel:
 *              type: string
 *          hotelId:
 *              type: string
 *          status:
 *              type: string
 *          price:
 *              type: string
 *                      
 *       
 */


router.post('/rooms',createRoom);

/**
 * @swagger
 * /rooms/{id}:
 *   get:
 *     summary: For getting a single room 
 *     tags:
 *       - [Rooms]
 *     description: Returns a single room
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Particular Room Object's ID (Automatically assigned by database)
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: A single room
 *       500:
 *         description: Server Error
 */     
router.get('/rooms/:id', getRoom);


/**
 * @swagger
 *
 * /rooms/{id}:
 *    put:
 *      summary: Room update based on ID
 *      tags: [Room]
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Room ID
 *          required: true
 *      requestBody:
 *        required: false
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/room'
 *      responses:
 *        "201":
 *          description: A Room schema
 *
 * components:
 *    schemas:
 *      room:
 *        type: object
 *        required: 
 *          - roomType
 *          - description
 *          - roomLabel
 *          - hotelId
 *          - status
 *          - price
 *        properties:
 *          roomType:
 *            type: string
 *          description:
 *            type: string
 *          roomLabel:
 *            type: string
 *          hotelId: 
 *            type: integer
 *          status:
 *            type: string
 *          price:
 *            type: string
 *            
 *
 */
router.put('/rooms/:idroom',updateRoom);

/**
 * @swagger
 * /rooms:
 *  get:
 *    tags:
 *    - All rooms
 *    summary: All rooms from database
 *    description: Rooms are desplayed from DB
 *    responses:
 *      '200':
 *        description: Rooms are desplayed succesffuly.
 *      
*/
router.get('/rooms',getRooms);

/**
 * @swagger
 * /rooms/{roomid}:
 *   delete:
 *     summary: Deletes a room based on ID
 *     tags:
 *       - Rooms
 *     description: Deletes a single Room
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: roomid
 *         description: room's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/rooms/:roomid',deleteRoom);

module.exports = router;





