import react from "react";

function Message({message}) {
    return (
        <div className="bubble you">
            {message}
        </div>
    )
}


export default Message;