import model from '../database/models';
import * as _ from 'lodash';

//send direct message
let userDetails = 
    [
        'roleId','id','firstname','lastname',
        'telphone','email','gender','origin',
        'age','identification_type','identification_number',
        'user_image','updatedAt','createdAt','managerId','isVerified'
    ];
exports.sendDirectMessage = async(req,res) => {
    const userId = req.userData.id;
    const {receiver,text} = req.body;
    const {user,userNotFound} = await findUserById(receiver);
    if(userNotFound)
      return res.status(404).json({message: res.__("receiver not found")});
    const newMessage = {
        sender: userId,
        receiver,
        type:'DIRECT_MESSAGE',
        text
    }  
    let message;
   try{
    message = await model.Message.create(newMessage);
    }
    catch(e){
        res.status(500).json({message: res.__("Error occured")})
    }
    return res.status(201).json({
        message,
        sender: _.pick(req.userData, userDetails),
        receiver: _.pick(user,userDetails),      
    })
}

//send general message
exports.sendGeneralMessage = async(req,res) => {
    const userId = req.userData.id;
    const {text} = req.body;
    const newMessage = {
        sender: userId,
        type:'GENERAL_MESSAGE',
        text
    }  
    let message;
   try{
    message = await model.Message.create(newMessage);
    }
    catch(e){
        return res.status(500).json({message: res.__("Error occured")})
    }
    return res.status(201).json({
        message,
        sender: _.pick(req.userData, userDetails),
    })
}

//get direct conversation
exports.getDirectConversation = async(req,res) => {
    const {senderId,receiverId} = req.params;
    if(findUserById(senderId).userNotFound)
     return res.status(404).json({message: res.__("sender not found")});
    else if(findUserById(receiverId).userNotFound)
     return res.status(404).json({message: res.__("receiver not found")}); 
    let messages = await model.Message.findAll({
        where: {
            sender: senderId,
            receiver: receiverId,
        }
    })
    return res.status(200).json(messages);
}

//get general conversation
exports.getGeneralConversation = async(req,res) => {
    let messages = await model.Message.findAll({
        where: {
            type:'GENERAL_MESSAGE'
        }
    })
    return res.status(200).json(messages);
}

exports.deleteMessage = async(req,res) => {
    const {messageId} = req.params;
    const userId = req.userData.id;
    const {message, messageNotFound} = await findMessageById(messageId);
    if(messageNotFound)
     return res.status(404).json({message: res.__("message not found")});
    if(message.sender != userId && userId !=1)
     return res.status(401).json({message: res.__("access denied!")});
    try{
        model.Message.destroy({
            where: { id: messageId }
          });
    }
    catch(e){
        return res.status(500).json({message: res.__("an error occured")});
    }
    return res.status(200).json({
        message: res.__("Message deleted successfully"),
        deletedMessage: message
    }) 
}

//get a single message
exports.getMessageById = async(req,res) => {
    const {messageId} = req.params;
    const {message, messageNotFound} = await findMessageById(messageId);
    if(messageNotFound)
     return res.status(404).json({message: res.__("message not found")});
    let msgSender = await findUserById(message.sender);
    let sender,receiver;
    if(msgSender.user)
      sender = _.pick(msgSender.user, userDetails)
    let msgReceiver = await findUserById(message.receiver);
    if(msgReceiver.user)
     receiver = _.pick(msgReceiver.user, userDetails)
   
    return res.status(200).json({
        message,
        sender,
        receiver
    })
     
}

const findUserById = async(userId) => {
    let user;
    try{
      user = await model.User.findByPk(userId);
      if(!user)
        return {userNotFound:true};
      return {user};
    }
    catch(err){
        return {userNotFound:true};
    }
}

const findMessageById = async(messageId) => {
    let message;
    try{
      message = await model.Message.findByPk(messageId);
      if(!message)
        return {messageNotFound:true};
      return {message};
    }
    catch(e){
       return {messageNotFound:true};
    }
}