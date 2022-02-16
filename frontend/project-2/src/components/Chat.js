import react, { useState} from "react";
import { useParams } from "react-router-dom";
import Message from "./Message";

function Chat({send, users}) {
    const [message, SetMessage] = useState("")
    let {name} = useParams()
    function changeHandler(event) {
        SetMessage(event.target.value)
    }
    function clickHandler() {
        send.send({action: "message", receiver: "Tom", message: message})
        SetMessage("")
    }
    console.log(name)
    const messages = name in users ? users[name].messages : [];
    return (
        <>
        <div className="top"><span>To: <span className="name">Dog Woofson</span></span></div>
            <div className="chat active-chat" data-chat="person1">
                <div className="conversation-start">
                    <span>Today, 6:48 AM</span>
                </div>
                {messages.map(message => {
                    return (
                        <Message 
                          message={message}
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