import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { instance } from "../../api/axiosApi";
import { baseUrl } from "../../api/axiosApi";
import { useLocation } from "react-router-dom";

function ChatBody() {
  const sock = new SockJS(`${baseUrl}/ws/chat`);
  const ws = Stomp.over(sock);
  const reconnect = 0;

  const {id} = useParams();

  const location = useLocation();
  const reservationId = location.state;
  console.log(id, reservationId)

  // const id = localStorage.getItem('wschat.id');
  // const sender = localStorage.getItem('wschat.sender');

  const [roomInfo, setRoomInfo] = useState();
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);

  const findRoom = () => {
    instance.get('/chat/room/' + id).then(response => { setRoomInfo(response.data); });
  }
  // const sendMsg = () => {
  //   ws.send("/app/chat/message"+ id, {}, JSON.stringify({ type: 'TALK', id: id, sender: sender, message: msg }));
  //   setMsg("")
  // }
  // // const recvMsg = (recv) => {
  // //   console.log(messages)
  // //   const newMsg = [...messages , { "type": recv.type, "sender": recv.type == 'ENTER' ? '[알림]' : recv.sender, "message": recv.message }]
  // //   setMessages(newMsg);
  // // }

  // const connect = () => {
  //   // pub/sub event
  //   ws.connect({}, function (frame) {
  //     ws.subscribe("/topic/chat/room/" + id, function (message) {
  //       const recv = JSON.parse(message.body);
  //       console.log("recover",recv);
  //       // setMessages([recv, ...messages])
  //       messages.unshift(recv)
  //       setMessages(messages)
  //       // recvMsg(recv);
  //     });
  //     ws.send("/app/chat/message", {}, JSON.stringify({ type: 'ENTER', id: id, sender: sender }));
  //   }, function (error) {
  //     if (reconnect++ <= 5) {
  //       console.log(error)
  //       setTimeout(function () {
  //         console.log("connection reconnect");
  //         sock = new SockJS(`${baseUrl}/ws/chat`);
  //         ws = Stomp.over(sock);
  //         connect();
  //       }, 10 * 1000);
  //     }
  //   });
  // }

  // useEffect(() => {
  //   findRoom();
  //   connect();
  // }, [])


  // return (
  //   <div>
  //     <h1>{roomInfo?.roomName}</h1>
  //     Chat Detail
  //     <div>
  //       <input
  //         value={msg}
  //         onChange={(event) => { setMsg(event.target.value) }}
  //       />
  //       <button onClick={sendMsg}>전송</button>
  //     </div>
  //     {(messages !== []) && (
  //       messages?.map((v,i) => {
  //         return (
  //           <div key={i}>
  //             <div>User: {v.sender}</div>
  //             <div>Comments: {v.message}</div>
  //             <br />
  //             <br />
  //           </div>
  //         )
  //       })
  //     )
  //     }
  //   </div>
  // )
}

export default ChatBody;