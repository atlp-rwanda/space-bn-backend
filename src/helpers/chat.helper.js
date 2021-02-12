import {TYPING,STOP_TYPING,CHAT_MESSAGE,RECEIVED} from '../utils/chatEvents';
const chat = (socket) => {
     //joining the room
     socket.on('JOIN_CHAT',payloads => {
       socket.join(`MESSAGES_${payloads.userId}`);
       console.log('User: '+payloads.firstname+" joined: "+`MESSAGES_${payloads.userId}`);
     })
      //Someone is typing
      socket.on(TYPING, data => {
        socket.broadcast.emit("notifyTyping", {
          user: data.user,
          message: data.message
        });
      });

      //sending a direct message
      socket.on('DIRECT_MESSAGE', (data) => {
        console.log(data);
         socket.in(`MESSAGES_${data.senderId}`).emit('received',{
           message: data.text,
           date: new Date(),
           owner: data.fistname
          });
         socket.in(`MESSAGES_${data.receiverId}`).emit('received',{
           message: data.text,
           date: new Date(),
           owner: data.firstname   
        })
      })
    
      //when soemone stops typing
      socket.on(STOP_TYPING, () => {
        socket.broadcast.emit("notifyStopTyping");
      });
    
      socket.on(CHAT_MESSAGE, function(msg) {
        console.log("message: " + msg);
    
        //broadcast message to everyone in port:5000 except yourself.
        socket.broadcast.emit(RECEIVED, { message: msg });
    
        //save chat to the database
  
      });
}
export default chat;