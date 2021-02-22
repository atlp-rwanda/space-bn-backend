import { Router } from 'express';
import notifications from '../controllers/notification.controller';
import checkAuth from '../middlewares/check-auth';

const notificationRoutes = new Router();

/**
 * @swagger
 * /notifications:
 *  get:
 *    tags: [Notifications]
 *    summary: Get notifications
 *    description: Authenticated user can get all notifications regarding to his/her requests.
 *    responses:
 *      '200':
 *        description: All recieved notifications.
 *      '400':
 *        description: Bad request.
 *      '500':
 *        description: Internal server error.
*/
notificationRoutes.get('/', checkAuth, notifications.getNotifications);
/**
 * @swagger
 * /notifications:
 *  put:
 *    tags: [Notifications]
 *    summary: Mark notifications as read
 *    description: Authenticated user can mark all unread notifications as read
 *    responses:
 *      '200':
 *        description: All Notifications marked as read.
 *      '404':
 *        description: No unread notifications.
 *      '500':
 *        description: Internal server error.
*/
notificationRoutes.put('/', checkAuth, notifications.markAsRead);

export default notificationRoutes;
