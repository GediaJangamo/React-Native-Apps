import React, {useRef, useState, useEffect} from "react";
import './Chat.css';

export default function Chat({socket}) {
 const messageRef = useRef();
 const [messageList, setMessageList] = useState([]);

 useEffect(() =>{
    socket.on('receive_message', data =>{
        setMessageList((current) => [...current, data])
    })

    return () => socket.off('receive_message') 

 },[socket])

  const handleSubmit = () =>{
    const message = messageRef.current.value
     if(!message.trim()) return

     socket.emit('message', message)
     clearInput();
  } 

  const clearInput = () =>{
    messageRef.current.value = '';
  }

    return (
        <div className="BoxChat">
            {/* <h1>Chat</h1> */}
            {
                messageList.map((message, index) =>(
                    <div className="Box" >
                        <div className="messageAuthor" key={index}> <strong>{message.author} </strong></div>
                        <div className="messageText" key={index}> {message.text}</div>
                    </div>
                )

                )
            }
            <input type="text" ref={messageRef} placeholder="Mensagem" />
            <button onClick={() => handleSubmit()}>enviar</button>
        </div>
    );

}