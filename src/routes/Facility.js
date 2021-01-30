import {Router} from 'express'
import {getFacilities,addFacility} from '../controllers/facilityController';
import {_validateFacility} from '../middlewares/FaclityValidation';
import {req as protection} from '../middlewares/check-auth';

const router=Router();

router.get('/',getFacilities);
/**
 * @swagger
 * /facility:
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

router.post('/addNew',_validateFacility,addFacility);
/**
 * @swagger
 * /facility/addNew:
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

export default router;