import React from "react";

function Message({message, who}) {
    return (
        <div className={"bubble " + who}>
            {message}
        </div>
    )
}


export default Message;