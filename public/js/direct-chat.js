var socket = io();
var messages = document.getElementById("messages");
let senderId;
let receiverId; 
let firstname;
const joinChat = () => {
  senderId = document.getElementById("senderId").value;
  receiverId = document.getElementById("receiverId").value;
  firstname = `testUser${senderId}`;
  const payloads = {
    firstname,
    userId: senderId
  }
socket.emit('JOIN_CHAT',payloads);
}

(function() {
  $("form").submit(function(e) {
    let li = document.createElement("li");
    e.preventDefault(); // prevents page reloading
    
    let payloads = {
      senderId,
      receiverId,
      text: $("#message").val(),
      firstname
    }
    socket.emit("DIRECT_MESSAGE", payloads);


    messages.appendChild(li).append($("#message").val());
    let span = document.createElement("span");
    messages.appendChild(span).append("by " + firstname + ": " + formatTimeAgo(new Date()));

    $("#message").val("");

    return false;
  });

  socket.on("received", data => {
    console.log("MY data: "+JSON.stringify(data));
    let li = document.createElement("li");
    let span = document.createElement("span");
    var messages = document.getElementById("messages");
    messages.appendChild(li).append(data.message);
    messages.appendChild(span).append("by " + data.owner + ": " + formatTimeAgo(data.date));
  });
})();

// fetching initial chat messages from the database
(function() {
  fetch("/chats")
    .then(data => {
      return data.json();
    })
    .then(json => {
      json.map(data => {
        let li = document.createElement("li");
        let span = document.createElement("span");
        messages.appendChild(li).append(data.message);
        messages
          .appendChild(span)
          .append("by " + data.sender + ": " + formatTimeAgo(data.createdAt));
      });
    });
})();

//is typing...

let messageInput = document.getElementById("message");
let typing = document.getElementById("typing");

//isTyping event
messageInput.addEventListener("keypress", () => {
  socket.emit("typing", { user: "Someone", message: "is typing..." });
});

socket.on("notifyTyping", data => {
  typing.innerText = data.user + " " + data.message;
  console.log(data.user + data.message);
});

//stop typing
messageInput.addEventListener("keyup", () => {
  socket.emit("stopTyping", "");
});

socket.on("notifyStopTyping", () => {
  typing.innerText = "";
});
