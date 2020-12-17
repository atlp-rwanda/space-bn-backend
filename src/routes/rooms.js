
const { Router } = require('express');

const router = Router();

const protection = require('../middlewares/check-auth');
const controller = require('../controllers/room');

const createRoom = controller.createRoom;
const getRooms = controller.getAllRooms;
const getRoom = controller.getRoomById;
const deleteRoom = controller.deleteRoom;
const updateRoom = controller.updateRoom;
const getHotelRooms = controller.roomByHotel;

/**
 * @swagger
 *
 * /rooms:
 *    post:
 *      summary: add a room
 *      tags: [Rooms]
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
 *          roomImage:
 *              type: string
 *                      
 *       
 */


router.post('/rooms',protection,createRoom);

/**
 * @swagger
 * /rooms/{roomId}:
 *   get:
 *     summary: For getting a single room 
 *     tags:
 *       - Rooms
 *     description: Returns a single room
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: roomId
 *         description: Particular Room Object's ID (Automatically assigned by database)
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: A single room
 *       500:
 *         description: Server Error
 */     
router.get('/rooms/:roomId', getRoom);



/**
 * @swagger
 *
<<<<<<< HEAD
 * /rooms/{id}:
 *    put:
 *      summary: Room update based on ID
 *      tags: [Rooms]
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Room ID
 *          required: true
 *      requestBody:
 *        required: false
=======
 * /rooms:
 *    post:
 *      summary: add a room
 *      tags: [rooms]
 *      requestBody:
 *        required: true
>>>>>>> 4ed03cf... removes the hotel
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/room'
 *      responses:
 *        "201":
<<<<<<< HEAD
 *          description: A Room schema
=======
 *          description: Article schema
>>>>>>> 4ed03cf... removes the hotel
 *
 * components:
 *    schemas:
 *      room:
 *        type: object
<<<<<<< HEAD
 *        required: 
=======
 *        required:
>>>>>>> 4ed03cf... removes the hotel
 *          - roomType
 *          - description
 *          - roomLabel
 *          - hotelId
 *          - status
<<<<<<< HEAD
 *          - price
=======
 *          - price 
>>>>>>> 4ed03cf... removes the hotel
 *        properties:
 *          roomType:
 *            type: string
 *          description:
<<<<<<< HEAD
 *            type: string
 *          roomLabel:
 *            type: string
 *          hotelId: 
 *            type: integer
 *          status:
 *            type: string
 *          price:
 *            type: string
 *          roomImage:
 *            type: string
 *            
 *
 */
router.put('/rooms/:idroom', updateRoom);

=======
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
>>>>>>> 4ed03cf... removes the hotel

/**
 * @swagger
 * /rooms:
 *  get:
 *    tags:
<<<<<<< HEAD
 *    - Rooms
=======
 *    - All rooms
>>>>>>> 4ed03cf... removes the hotel
 *    summary: All rooms from database
 *    description: Rooms are desplayed from DB
 *    responses:
 *      '200':
 *        description: Rooms are desplayed succesffuly.
 *      
*/
router.get('/rooms',getRooms);

<<<<<<< HEAD


/**
 * @swagger
 * /rooms/{roomId}:
=======
/**
 * @swagger
 * /rooms/{roomid}:
>>>>>>> 4ed03cf... removes the hotel
 *   delete:
 *     summary: Deletes a room based on ID
 *     tags:
 *       - Rooms
 *     description: Deletes a single Room
 *     produces:
 *       - application/json
 *     parameters:
<<<<<<< HEAD
 *       - name: roomId
 *         description: room's id
 *         in: path
 *         required: true
 *         type: integer
=======
 *       - name: roomid
 *         description: room's id
 *         in: path
 *         required: true
 *         type: string
>>>>>>> 4ed03cf... removes the hotel
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
<<<<<<< HEAD
router.delete('/rooms/:roomId',protection,deleteRoom);

/**
 * @swagger
 * /rooms/hotels/{hotelId}/rooms:
 *   get:
 *     summary: For getting all rooms for a particular hotel 
 *     tags:
 *       - Rooms
 *     description: Returns all rooms
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: hotelId
 *         description: Particular Hotel Object's ID (Automatically assigned by database)
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: All rooms returned
 *       500:
 *         description: Server Error
 */ 
router.get('/rooms/hotels/:hotelId/rooms', getHotelRooms);

=======
router.delete('/rooms/:roomid',deleteRoom);
>>>>>>> 4ed03cf... removes the hotel

module.exports = router;





