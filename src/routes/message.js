import express from 'express';
import {
    sendDirectMessage,sendGeneralMessage,getDirectConversation,getGeneralConversation,getMessageById,deleteMessage} 
from '../controllers/messageController';
import auth from '../middlewares/check-auth';

const router = express.Router();

router.post('/direct',auth, sendDirectMessage);
router.post('/general',auth, sendGeneralMessage);
router.get('/direct/sender/:senderId/receiver/:receiverId', getDirectConversation);
router.get('/general', getGeneralConversation);
router.get('/:messageId',getMessageById);
router.delete('/:messageId',auth, deleteMessage);

module.exports = router;