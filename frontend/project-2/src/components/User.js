import react from "react";
import { Link } from "react-router-dom";

function User({name}) {
    return (
        <li className="person" data-chat="person1">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/thomas.jpg" alt="" />
                    <Link to={`/chat/${name}`}>
                    <span className="name">{name}</span>
                    </Link>
                    <span className="time">2:09 PM</span>
                    <span className="preview">I was wondering...</span>
                </li>
    )
}

export default User;