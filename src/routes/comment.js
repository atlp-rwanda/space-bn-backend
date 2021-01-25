
import {Router} from 'express';
import {CreateComment, GetComment} from '../controllers/comment';
import auth from '../middlewares/check-auth';

const router  = Router();

/**
 * @swagger
 * /request/{requestId}/comments:
 *    get:
 *      summary: read Comments
 *      tags: [Comments]
 *      parameters:
 * 
 *        - name: requestId
 *          in: path
 *          type: string
 *          required: true
 * 
 *      responses:
 *        "200":
 *          description: Receive Comments
 *        "500":
 *          description: Error  
 */

router.get('/request/:requestId/comments', auth, GetComment);

/**
 * @swagger
 * /request/{requestId}/comment:
 *    post:
 *      summary: Write Comments
 *      tags: [Comments]
 *      parameters:
 *        - name: requestId
 *          in: path
 *          type: string
 *          required: true
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/comment'
 *      responses:
 *        "201":
 *          description: Comment Created
 *        "500":
 *          description:Error
 *
 * components:
 *    schemas:
 *      comment:
 *        type: object
 *        required:
 *          - comment
 *        properties:
 *          comment:
 *            type: string
 */

router.post('/request/:requestId/comment', auth, CreateComment);





export default router;


