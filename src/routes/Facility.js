import {Router} from 'express'
import {getFacilities,addFacility,updateFacility,deleteFacility} from '../controllers/facilityController';
import {_validateFacility} from '../middlewares/FaclityValidation';


const router=Router();

router.get('/',getFacilities);
/**
 * @swagger
 * /facilities:
 *   get:
 *     summary: get all facilities
 *     tags: [facility]
 *     description: array of facility
 *     produces:
 *       - application/json
 * 
 *     responses:
 *       200:
 *         description: ok
 *       500:
 *         description: Server Error
 */

router.post('/',_validateFacility,addFacility);
/**
 * @swagger
 * /facilities:
 *   post:
 *     summary: add new facility 
 *     tags: [facility]
 *     description: add new facility
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: location
 *         required: true
 *         type: string
 *       - name: address
 *         required: true
 *         type: string
 *       - name: number of rooms
 *       - name: room detail
 *       - name: images
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: facility addedd Successfully 
 *       500:
 *         description: Server Err
 */

router.put('/:id',_validateFacility,updateFacility);
/**
 * @swagger
 * /facilities:
 *   put:
 *     summary: update facility 
 *     tags: [facility]
 *     description: update facility
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: location
 *         required: true
 *         type: string
 *       - name: address
 *         required: true
 *         type: string
 *       - name: number of rooms
 *       - name: room detail
 *       - name: images
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: facility addedd Successfully 
 *       500:
 *         description: Server Err
 */

router.delete('/:id',_validateFacility, deleteFacility);
/**
 * @swagger
 * /facility/delete:
 *   delete:
 *     summary: delete single facilities
 *     tags: [facility]
 *     description: delete a facility
 *     produces:
 *       - application/json
 * 
 *     responses:
 *       200:
 *         description: ok
 *       500:
 *         description: Server Error
 */

export default router;