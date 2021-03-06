import React from "react";
import { Link } from "react-router-dom";

function User({name, messages, picture}) {
    var time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    console.log("inside User")
    console.log(messages)
    const previewMessage = messages.length === 0 ? '' : messages[messages.length-1].message.slice(0, 10)
    return (
        <Link to={`/chat/${name}`} >
            <li className="person" data-chat="person1">
                <img src={picture} style={{width:""}} alt="" />
                <span className="name">{name}</span>
                <span className="time">{time}</span>
                <span className="preview">{previewMessage}</span>
            </li>
         </Link>
    )
}

export default User;