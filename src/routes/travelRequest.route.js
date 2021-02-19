import { Router } from "express";
import auth from "../middlewares/check-auth";
import {createTravelRequest, getTravelRequest} from "../controllers/travelRequest.controller";

const router = Router();


/**
 * @swagger
 * /travelRequest:
 *    post:
 *      summary: Create Travel Request
 *      tags: [Travel Request]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/travelRequests'
 *      responses:
 *        "201":
 *          description: Comment Created
 *        "500":
 *          description:Error
 *
 * components:
 *    schemas:
 *      travelRequests:
 *        type: object
 *        required:
 *          - destinations
 *          - destination
 *          - destination
 *          - destination
 *          - destination
 *        properties:
 *          comment:
 *            type: string
 */
router.post("/travelRequest",auth, createTravelRequest);

/**
 * @swagger
 * /travelRequests:
 *    get:
 *      summary: Get Travel Request
 *      tags: [Travel Request]
 *      responses:
 *        "200":
 *          description: Get all Travel Request successfull
 */

router.get("/travelRequests", auth, getTravelRequest);

export default router;

