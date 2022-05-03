import React, { useState} from "react";
import { useParams } from "react-router-dom";
import Picker from 'emoji-picker-react';
import Message from "./Message";



function Chat({send, users}) {
    var time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})

    const [message, SetMessage] = useState("")
    let {name} = useParams()
    function changeHandler(event) {
        SetMessage(event.target.value)
    }
    function clickHandler() {
        send.send({action: "message", receiver: name, message: message})
        SetMessage("")
    }
    console.log(name)
    const messages = name in users ? users[name].messages : [];
    console.log(users)
    return (
        <>
        <div className="top"><span>To: <span className="name">{name}</span></span></div>
            <div className="chat active-chat" data-chat="person1">
                <div className="conversation-start">
                    <span>Today, {time}</span>
                </div>
                {messages.map(message => {
                    return (
                        <Message 
                          message={message.message}
                          who={message.who}
                        />
                    )
                })}
            </div>
            
            <div className="write">
                <a href="javascript:;" className="write-link attach"></a>
                <input type="text" onChange={changeHandler} value={message}/>
                <a href="javascript:;" className="write-link smiley"></a>
                <a href="javascript:;" className="write-link send" onClick={clickHandler}></a>
            </div>
            </>
    )
}

export default Chat;